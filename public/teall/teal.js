/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
'use strict';

window.teal = {};
window.$t = window.teal;

teal.copyto = function (obj, res) {
  if (obj == null || typeof obj !== 'object') return obj;
  if (obj instanceof Array) {
    for (let i = obj.length - 1; i >= 0; --i) res[i] = $t.copy(obj[i]);
  } else {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) res[i] = $t.copy(obj[i]);
    }
  }
  return res;
};

teal.copy = function (obj) {
  if (!obj) return obj;
  return teal.copyto(obj, new obj.constructor());
};

teal.element = function (name, props, place) {
  let dom = document.createElement(name);
  for (let i in props) dom.setAttribute(i, props[i]);
  if (place) place.appendChild(dom);
  return dom;
};

teal.id = function (id) {
  return document.getElementById(id);
};

teal.set = function (sel, props) {
  for (let i in props) sel.setAttribute(i, props[i]);
  return sel;
};

teal.clas = function (sel, oldclass, newclass) {
  let oc = oldclass ? oldclass.split(/\s+/) : [],
    nc = newclass ? newclass.split(/\s+/) : [],
    classes = (sel.getAttribute('class') || '').split(/\s+/);
  for (let i in oc) {
    let ind = classes.indexOf(oc[i]);
    if (ind >= 0) classes.splice(ind, 1);
  }
  for (let i in nc) {
    if (classes.indexOf(nc[i]) < 0) classes.push(nc[i]);
  }
  sel.setAttribute('class', classes.join(' '));
};

teal.empty = function (sel) {
  if (sel.childNodes) while (sel.childNodes.length) sel.removeChild(sel.firstChild);
};

teal.remove = function (sel) {
  if (sel) {
    if (sel.parentNode) sel.parentNode.removeChild(sel);
    else for (let i = sel.length - 1; i >= 0; --i) sel[i].parentNode.removeChild(sel[i]);
  }
};

teal.bind = function (sel, eventname, func, bubble) {
  if (eventname.constructor === Array) {
    for (let i in eventname) sel.addEventListener(eventname[i], func, bubble ? bubble : false);
  } else sel.addEventListener(eventname, func, bubble ? bubble : false);
};

teal.unbind = function (sel, eventname, func, bubble) {
  if (eventname.constructor === Array) {
    for (let i in eventname) sel.removeEventListener(eventname[i], func, bubble ? bubble : false);
  } else sel.removeEventListener(eventname, func, bubble ? bubble : false);
};

teal.one = function (sel, eventname, func, bubble) {
  let one_func = function (e) {
    func(e);
    teal.unbind(sel, eventname, one_func, bubble);
  };
  teal.bind(sel, eventname, one_func, bubble);
};

teal.raise_event = function (sel, eventname, bubble, cancelable) {
  let evt = document.createEvent('UIEvents');
  evt.initEvent(eventname, bubble == undefined ? true : bubble, cancelable == undefined ? true : cancelable);
  sel.dispatchEvent(evt);
};

if (navigator.appName == 'Microsoft Internet Explorer') {
  teal.get_elements_by_class = function (classes, n) {
    let node = n || document,
      list = node.getElementsByTagName('*'),
      cl = classes.split(/\s+/),
      result = [];

    for (let i = list.length - 1; i >= 0; --i) {
      for (let j = cl.length - 1; j >= 0; --j) {
        let clas = list[i].getAttribute('class');
        if (clas && clas.search('\\b' + cl[j] + '\\b') != -1) {
          result.push(list[i]);
          break;
        }
      }
    }
    return result;
  };
} else {
  teal.get_elements_by_class = function (classes, node) {
    return (node || document).getElementsByClassName(classes);
  };
}

teal.rpc = function (params, resp) {
  let ajax = new XMLHttpRequest(),
    ret;
  ajax.open('post', 'f', resp ? true : false);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (resp) resp(JSON.parse(ajax.responseText));
      else ret = JSON.parse(ajax.responseText);
    }
  };
  ajax.send(JSON.stringify(params));
  return ret;
};

teal.uuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

teal.get_url_params = function () {
  let params = window.location.search.substring(1).split('&');
  let res = {};
  for (let i in params) {
    let keyvalue = params[i].split('=');
    res[keyvalue[0]] = decodeURI(keyvalue[1]);
  }
  return res;
};
teal.get_mouse_coords = function (ev) {
  let touches = ev.changedTouches;
  if (touches) return { x: touches[0].clientX, y: touches[0].clientY };
  return { x: ev.clientX, y: ev.clientY };
};

teal.deferred = function () {
  let solved = false,
    callbacks = [],
    args = [];
  function solve() {
    while (callbacks.length) {
      callbacks.shift().apply(this, args);
    }
  }
  return {
    promise: function () {
      return {
        then: function (callback) {
          let deferred = teal.deferred(),
            promise = deferred.promise();
          callbacks.push(function () {
            let res = callback.apply(this, arguments);
            if (res && 'done' in res) res.done(deferred.resolve);
            else deferred.resolve.apply(this, arguments);
          });
          return promise;
        },
        done: function (callback) {
          callbacks.push(callback);
          if (solved) solve();
          return this;
        },
        cancel: function () {
          callbacks = [];
        },
      };
    },
    resolve: function () {
      solved = true;
      args = Array.prototype.slice.call(arguments, 0);
      solve();
    },
  };
};

teal.when = function (promises) {
  let deferred = teal.deferred();
  let count = promises.length,
    ind = 0;
  if (count == 0) deferred.resolve();
  for (let i = 0; i < count; ++i) {
    promises[i].done(function () {
      if (++ind == count) deferred.resolve();
    });
  }
  return deferred.promise();
};

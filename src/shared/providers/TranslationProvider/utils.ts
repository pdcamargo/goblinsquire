import { PopulateResources } from './types';

export const availableLanguages = ['pt-BR', 'en-US'] as const;
export const availableFiles = ['common'] as const;

export const populateResources = () => {
  return availableLanguages.reduce((object, language) => {
    const resource = availableFiles.reduce((resourceObject, file) => {
      const content = require(`../../../../locales/${language}/${file}.json`);

      return {
        ...resourceObject,
        [file]: content,
      };
    }, {});

    return {
      ...object,
      [language]: resource,
    };
  }, {}) as PopulateResources;
};

const escapeRegExp = (str: string) => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

const replaceAll = (str: string, find: string, replace: string) =>
  str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

export const replaceParams = (str: string, params: Record<string, string>) => {
  const keys = Object.keys(params);

  return keys.reduce((result, key) => replaceAll(result, `%${key}%`, params[key]), str);
};

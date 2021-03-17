import { useState } from 'react';
import { isClient } from 'shared/utils';
import { useEventListener } from './useEventListener';

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: isClient ? window.innerWidth : 1360,
    height: isClient ? window.innerHeight : 720,
  });

  useEventListener('resize', () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return size;
};

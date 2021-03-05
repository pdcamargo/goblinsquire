import theme, { ThemeType } from './index';

export const getThemeToken = <K extends keyof ThemeType, V extends keyof ThemeType[K]>(key: K, prop: V) =>
  theme[key][prop];

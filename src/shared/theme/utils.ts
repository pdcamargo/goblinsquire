import {
  ColorNamesType,
  ColorNamesVariation,
  ColorVariationsType,
  BreakPointValueType,
  ResponsivePropsType,
  BreakpointSizeType,
} from './types';

export const pixelToRem = (px: number) => {
  const base = 16;
  const rem = (1 / base) * px;

  return rem;
};

export const lightenHexColor = (color: string, percent: number) => {
  var num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  const newColor = (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1);

  return `#${newColor}`;
};

export const isColorLight = (color: string) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 185;
};

export const createPaletteColors = (baseColors: Record<ColorNamesType, string>): ColorVariationsType => {
  return Object.entries(baseColors).reduce((current, data) => {
    const key = data[0] as ColorNamesType;
    const color = data[1];

    const colorVariation: Record<ColorNamesVariation, string> = {
      main: color,
      dark: lightenHexColor(color, -11),
      light: lightenHexColor(color, 15),
    };

    return {
      ...current,
      [key]: colorVariation,
    };
  }, {}) as ColorVariationsType;
};

const breakpoints = [
  '0',
  `${pixelToRem(560)}rem`,
  `${pixelToRem(768)}rem`,
  `${pixelToRem(992)}rem`,
  `${pixelToRem(1200)}rem`,
  `${pixelToRem(1440)}rem`,
];
export const generateBreakpointValues = () => {
  return {
    breakpoints,
    mediaQueries: {
      xs: `@media screen and (min-width: ${breakpoints[0]})`,
      sm: `@media screen and (min-width: ${breakpoints[1]})`,
      md: `@media screen and (min-width: ${breakpoints[2]})`,
      lg: `@media screen and (min-width: ${breakpoints[3]})`,
      xl: `@media screen and (min-width: ${breakpoints[4]})`,
      xxl: `@media screen and (min-width: ${breakpoints[5]})`,
    },
  };
};

const generateValueByArray = <T>(key: string, propValueArray: Array<T | null>, parser: (oldValue: T) => string) => {
  const { mediaQueries } = generateBreakpointValues();
  const mediaValues = Object.values(mediaQueries);

  const responsiveValue = mediaValues.reduce((current, media, index) => {
    const propValue = propValueArray[index];
    const parsedValue = propValue && parser(propValue);

    if (index === 0 && parsedValue) {
      return `${key}: ${parsedValue};`;
    }

    if (parsedValue) {
      const mediaValue = `\n${media} { \n \t${key}: ${parsedValue}; \n}`;
      current += mediaValue;
    }

    return current;
  }, '');

  return responsiveValue;
};

const generateValueByObject = <T>(
  key: string,
  propValueObject: Partial<BreakPointValueType<T>>,
  parser: (oldValue: T) => string,
) => {
  const responsiveValue = Object.entries(propValueObject).reduce((current, [mediaKey, propValue]) => {
    const { mediaQueries } = generateBreakpointValues();
    const media = mediaQueries[mediaKey as BreakpointSizeType];
    const parsedValue = propValue && parser(propValue);

    if (mediaKey === 'xs' && parsedValue) {
      return `${key}: ${parsedValue};`;
    }

    if (parsedValue) {
      const mediaValue = `\n${media} { \n \t${key}: ${parsedValue}; \n}`;
      current += mediaValue;
    }

    return current;
  }, '');

  return responsiveValue;
};

export const generateResponsiveValue = <T>(
  key: string,
  propValue: ResponsivePropsType<T>,
  parser?: (oldValue: T) => string,
) => {
  const parserFn = parser ? parser : (val: T) => `${val}`;
  if (Array.isArray(propValue)) return generateValueByArray(key, propValue, parserFn);
  if (typeof propValue === 'object') return generateValueByObject(key, propValue, parserFn);

  return `${key}: ${parserFn(propValue)};`;
};

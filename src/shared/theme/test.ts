import { mediaQueries } from './properties/breakpoints';
import { ColorNamesType, ColorVariationsType } from './types';
import { createPaletteColors, generateResponsiveValue, isColorLight, lightenHexColor } from './utils';

describe('utils.ts', () => {
  it('should generate css without array or object, and transform value with parser', () => {
    const responsiveValue = generateResponsiveValue<string>('display', 'n', (oldValue) => 'none');
    const expected = 'display: none;';

    expect(responsiveValue).toBe(expected);
  });

  it('should not generate media query value for mobile first', () => {
    const responsiveByArray = generateResponsiveValue<string>('display', ['none']);
    const responsiveByObject = generateResponsiveValue<string>('display', { xs: 'none' });
    const expected = 'display: none;';

    expect(responsiveByArray).toBe(expected);
    expect(responsiveByObject).toBe(expected);
  });

  it('should generate all media query with no media query for mobile first with object and array methods', () => {
    const responsiveByArray = generateResponsiveValue<string>('display', [
      'none',
      'block',
      'flex',
      'grid',
      'table',
      'inline-block',
    ]);
    const responsiveByObject = generateResponsiveValue<string>('display', {
      xs: 'none',
      sm: 'block',
      md: 'flex',
      lg: 'grid',
      xl: 'table',
      xxl: 'inline-block',
    });

    const expected = `display: none;\n${mediaQueries.sm} { \n \tdisplay: block; \n}\n${mediaQueries.md} { \n \tdisplay: flex; \n}\n${mediaQueries.lg} { \n \tdisplay: grid; \n}\n${mediaQueries.xl} { \n \tdisplay: table; \n}\n${mediaQueries.xxl} { \n \tdisplay: inline-block; \n}`;

    expect(responsiveByArray).toBe(expected);
    expect(responsiveByObject).toBe(expected);
  });

  it('should generate palette colors', () => {
    const baseColors: Record<ColorNamesType, string> = {
      primary: '#7D4574',
      secondary: '#388697',
      tertiary: '#EBBAB9',
      info: '#14A0E1',
      danger: '#CC2936',
      gray: '#cdced0',
      success: '#58A4B0',
      warning: '#ff9800',
    };

    const generatedPalette = createPaletteColors(baseColors);

    const expected: ColorVariationsType = {
      primary: {
        main: baseColors.primary,
        dark: lightenHexColor(baseColors.primary, -11),
        light: lightenHexColor(baseColors.primary, 15),
      },
      secondary: {
        main: baseColors.secondary,
        dark: lightenHexColor(baseColors.secondary, -11),
        light: lightenHexColor(baseColors.secondary, 15),
      },
      tertiary: {
        main: baseColors.tertiary,
        dark: lightenHexColor(baseColors.tertiary, -11),
        light: lightenHexColor(baseColors.tertiary, 15),
      },
      info: {
        main: baseColors.info,
        dark: lightenHexColor(baseColors.info, -11),
        light: lightenHexColor(baseColors.info, 15),
      },
      danger: {
        main: baseColors.danger,
        dark: lightenHexColor(baseColors.danger, -11),
        light: lightenHexColor(baseColors.danger, 15),
      },
      gray: {
        main: baseColors.gray,
        dark: lightenHexColor(baseColors.gray, -11),
        light: lightenHexColor(baseColors.gray, 15),
      },
      success: {
        main: baseColors.success,
        dark: lightenHexColor(baseColors.success, -11),
        light: lightenHexColor(baseColors.success, 15),
      },
      warning: {
        main: baseColors.warning,
        dark: lightenHexColor(baseColors.warning, -11),
        light: lightenHexColor(baseColors.warning, 15),
      },
    };

    expect(generatedPalette).toStrictEqual(expected);
  });

  it('should return white as a light value and black as a dark value', () => {
    const isWhiteLight = isColorLight('#ffffff');
    const isBlackLight = isColorLight('#000000');

    expect(isWhiteLight).toBe(true);
    expect(isBlackLight).toBe(false);
  });
});

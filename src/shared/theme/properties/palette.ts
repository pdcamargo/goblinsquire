import { ColorNamesType, PalleteType } from '../types';
import { createPaletteColors } from '../utils';

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

const palette: PalleteType = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  ...createPaletteColors(baseColors),
};

export default palette;

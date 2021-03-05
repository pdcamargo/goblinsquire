import { SizeType } from '../types';
import { pixelToRem } from '../utils';

const fontSizes: Record<SizeType, string> = {
  xxs: `${pixelToRem(10)}rem`,
  xs: `${pixelToRem(12)}rem`,
  sm: `${pixelToRem(14)}rem`,
  md: `${pixelToRem(16)}rem`,
  lg: `${pixelToRem(19)}rem`,
  xl: `${pixelToRem(23)}rem`,
  xxl: `${pixelToRem(27)}rem`,
};

export default fontSizes;

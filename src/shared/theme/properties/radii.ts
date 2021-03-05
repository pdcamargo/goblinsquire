import { BorderRadiusType } from '@theme/tokens/border';
import { pixelToRem } from '../utils';

const radii: Record<BorderRadiusType, string> = {
  full: '9999px',
  none: '0',
  sm: `${pixelToRem(2)}rem`,
  md: `${pixelToRem(4)}rem`,
  lg: `${pixelToRem(8)}rem`,
  xl: `${pixelToRem(16)}rem`,
  xxl: `${pixelToRem(24)}rem`,
};

export default radii;

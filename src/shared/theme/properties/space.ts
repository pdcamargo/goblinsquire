import { SpacingType } from '../types';
import { pixelToRem } from '../utils';

const space: Record<SpacingType, string> = {
  auto: 'auto',
  none: '0',
  xs: `${pixelToRem(2)}rem`,
  sm: `${pixelToRem(4)}rem`,
  md: `${pixelToRem(8)}rem`,
  lg: `${pixelToRem(16)}rem`,
  xl: `${pixelToRem(24)}rem`,
  xxl: `${pixelToRem(48)}rem`,
};

export default space;

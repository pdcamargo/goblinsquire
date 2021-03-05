import { ShadowType } from '../types';
import { pixelToRem } from '../utils';

const boxShadows: Record<ShadowType, string> = {
  none: 'none',
  sm: `0 ${pixelToRem(2)}rem ${pixelToRem(4)}rem rgba(0,0,0,.075)`,
  md: `0 ${pixelToRem(8)}rem ${pixelToRem(16)}rem rgba(0,0,0,.075)`,
  lg: `0 ${pixelToRem(16)}rem ${pixelToRem(48)}rem rgba(0,0,0,.075)`,
};

export default boxShadows;

import { LetterSpacingType } from '../types';
import { pixelToRem } from '../utils';

const letterSpacings: Record<LetterSpacingType, string> = {
  tighter: `${pixelToRem(-0.8)}rem`,
  tight: `${pixelToRem(-0.4)}rem`,
  normal: `0`,
  wide: `${pixelToRem(0.4)}rem`,
  wider: `${pixelToRem(0.8)}rem`,
};

export default letterSpacings;

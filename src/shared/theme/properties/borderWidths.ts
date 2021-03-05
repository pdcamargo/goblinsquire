import { BorderWidthType } from '../types';
import { pixelToRem } from '../utils';

const borderWidths: Record<BorderWidthType, string> = {
  '0': '0',
  none: 'none',
  thinner: `${pixelToRem(0.5)}rem`,
  thin: `${pixelToRem(1)}rem`,
  medium: `${pixelToRem(2)}rem`,
  thick: `${pixelToRem(3)}rem`,
  thicker: `${pixelToRem(4)}rem`,
};

export default borderWidths;

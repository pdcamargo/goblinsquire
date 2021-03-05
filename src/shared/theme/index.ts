import { breakpoints, mediaQueries } from './properties/breakpoints';
import radii from './properties/radii';
import fontWeights from './properties/fontWeights';
import fontSizes from './properties/fontSizes';
import zIndices from './properties/zIndices';
import boxShadows from './properties/boxShadows';
import space from './properties/space';
import letterSpacings from './properties/letterSpacings';
import palette from './properties/palette';
import borderWidths from './properties/borderWidths';

const theme = {
  fontSizes,
  breakpoints,
  mediaQueries,
  fontWeights,
  zIndices,
  boxShadows,
  space,
  borderWidths,
  radii,
  letterSpacings,
  palette,
};

export type ThemeType = typeof theme;
export default theme;

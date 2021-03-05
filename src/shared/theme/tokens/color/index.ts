import { css } from 'styled-components';

import { ColorPropsType, BackgroundColorPropsType, BorderColorPropsType } from './types';

import { CssPropsRepresentation, ColorType, ColorNamesType, ColorNamesVariation } from '../../types';
import { getThemeToken } from '../../helpers';
import { generateTokenCss } from '../utils';

const colorCssRepresentation: CssPropsRepresentation<ColorPropsType> = {
  color: 'color',
};

const backgroundColorCssRepresentation: CssPropsRepresentation<BackgroundColorPropsType> = {
  backgroundColor: 'background-color',
};

const borderColorCssRepresentation: CssPropsRepresentation<BorderColorPropsType> = {
  borderColor: 'border-color',
};

const parseColor = (currentVal: ColorType) => {
  if (['white', 'black', 'transparent'].includes(currentVal)) return currentVal;

  const color = currentVal.split('.');
  const colorKey = (color.length === 2 ? color[1] : 'main') as ColorNamesVariation;

  const colorSchema = getThemeToken('palette', color[0] as ColorNamesType);

  return colorSchema[colorKey];
};

export const colorToken = css`
  ${(props) => generateTokenCss<ColorPropsType, ColorType>(props, colorCssRepresentation, parseColor)}
`;
export const backgroundColorToken = css`
  ${(props) =>
    generateTokenCss<BackgroundColorPropsType, ColorType>(props, backgroundColorCssRepresentation, parseColor)}
`;
export const borderColorToken = css`
  ${(props) => generateTokenCss<BorderColorPropsType, ColorType>(props, borderColorCssRepresentation, parseColor)}
`;
export * from './types';

import { css } from 'styled-components';

import {
  BorderPropsType,
  BorderRadiusPropsType,
  BorderRadiusType,
  BorderStylePropsType,
  BorderStyleType,
  BorderWidthPropsType,
  BorderWidthType,
} from './types';

import { CssPropsRepresentation } from '../../types';
import { getThemeToken } from '../../helpers';
import { generateTokenCss } from '../utils';

const borderCssRepresentation: CssPropsRepresentation<BorderPropsType> = {
  border: 'border',
  borderBottom: 'border-bottom',
  borderLeft: 'border-left',
  borderRight: 'border-right',
  borderTop: 'border-top',
};

const borderStyleCssRepresentation: CssPropsRepresentation<BorderStylePropsType> = {
  borderStyle: 'border-style',
  borderBottomStyle: 'border-bottom-style',
  borderTopStyle: 'border-top-style',
  borderLeftStyle: 'border-left-style',
  borderRightStyle: 'border-right-style',
};

const borderWidthCssRepresentation: CssPropsRepresentation<BorderWidthPropsType> = {
  borderWidth: 'border-width',
  borderBottomWidth: 'border-bottom-width',
  borderTopWidth: 'border-top-width',
  borderLeftWidth: 'border-left-width',
  borderRightWidth: 'border-right-width',
};

const borderRadiusCssRepresentation: CssPropsRepresentation<BorderRadiusPropsType> = {
  borderRadius: 'border-radius',
  borderBottomLeftRadius: 'border-bottom-left-radius',
  borderBottomRightRadius: 'border-bottom-right-radius',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightRadius: 'border-top-right-radius',
};

const parseBorderWidth = (oldValue: BorderWidthType) => getThemeToken('borderWidths', oldValue);
const parseBorderRadius = (oldValue: BorderRadiusType) => getThemeToken('radii', oldValue);

export const borderToken = css`
  ${(props) => generateTokenCss<BorderPropsType, string>(props, borderCssRepresentation)}
`;
export const borderStyleToken = css`
  ${(props) => generateTokenCss<BorderStylePropsType, BorderStyleType>(props, borderStyleCssRepresentation)}
`;
export const bordeWidthToken = css`
  ${(props) =>
    generateTokenCss<BorderWidthPropsType, BorderWidthType>(props, borderWidthCssRepresentation, parseBorderWidth)}
`;
export const bordeRadiusToken = css`
  ${(props) =>
    generateTokenCss<BorderRadiusPropsType, BorderRadiusType>(props, borderRadiusCssRepresentation, parseBorderRadius)}
`;
export const allBorderToken = css`
  ${borderToken}${borderStyleToken}${bordeWidthToken}${bordeRadiusToken}
`;
export * from './types';

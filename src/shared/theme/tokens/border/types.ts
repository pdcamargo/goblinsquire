import { ExtraExtraSmallType, ExtraSmallType, SizeType, TokenPropsType } from '../../types';

export type BorderRadiusType = 'none' | 'full' | Exclude<SizeType, ExtraExtraSmallType | ExtraSmallType>;

export type BorderWidthType = 'none' | '0' | 'thinner' | 'thin' | 'medium' | 'thick' | 'thicker';

export type BorderStyleType =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'initial'
  | 'inherit';

export type BorderPropsType = 'border' | 'borderTop' | 'borderLeft' | 'borderRight' | 'borderBottom';
export type BorderWidthPropsType =
  | 'borderWidth'
  | 'borderBottomWidth'
  | 'borderTopWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth';
export type BorderStylePropsType =
  | 'borderStyle'
  | 'borderBottomStyle'
  | 'borderTopStyle'
  | 'borderLeftStyle'
  | 'borderRightStyle';
export type BorderRadiusPropsType =
  | 'borderRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius';

export type BorderTokenProps = TokenPropsType<BorderPropsType, string>;
export type BorderWidthTokenProps = TokenPropsType<BorderWidthPropsType, BorderWidthType>;
export type BorderStyleTokenProps = TokenPropsType<BorderStylePropsType, BorderStyleType>;
export type BorderRadiusTokenProps = TokenPropsType<BorderRadiusPropsType, BorderRadiusType>;

export type AllBorderTokenProps =
  | BorderTokenProps
  | BorderWidthTokenProps
  | BorderStyleTokenProps
  | BorderRadiusTokenProps;

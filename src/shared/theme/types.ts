type ExtraExtraSmallType = 'xxs';
type ExtraSmallType = 'xs';
type SmallType = 'sm';
type MediumType = 'md';
type LargeType = 'lg';
type ExtraLargeType = 'xl';
type ExtraExtraLargeType = 'xxl';

export type SizeType =
  | ExtraExtraSmallType
  | ExtraSmallType
  | SmallType
  | MediumType
  | LargeType
  | ExtraLargeType
  | ExtraExtraLargeType;

export type BreakpointSizeType =
  | ExtraSmallType
  | SmallType
  | MediumType
  | LargeType
  | ExtraLargeType
  | ExtraExtraLargeType;
export type BreakPointValueType<T> = Record<BreakpointSizeType, T>;
export type ResponsivePropsType<T> = T | Array<T | null> | Partial<BreakPointValueType<T>>;

export type TokenPropsType<TokenPropNames extends string, TokenPropValues> = Partial<
  Record<TokenPropNames, ResponsivePropsType<TokenPropValues>>
>;

export type CssPropsRepresentation<PropsType extends string> = Record<PropsType, string | Array<string>>;

export type FontWeightType = 'thin' | 'light' | 'normal' | 'medium' | 'bold' | 'extrabold' | 'black';

export type ZIndexType =
  | 'hide'
  | 'auto'
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'backdrop'
  | 'modal'
  | 'popover'
  | 'tooltip';

export type ShadowType = 'none' | SmallType | MediumType | LargeType;

export type SpacingType = 'auto' | 'none' | Exclude<SizeType, ExtraExtraSmallType>;

export type BorderWidthType = 'none' | '0' | 'thinner' | 'thin' | 'medium' | 'thick' | 'thicker';

export type BorderRadiusType = 'none' | 'full' | Exclude<SizeType, ExtraExtraSmallType | ExtraSmallType>;

export type LetterSpacingType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';

export type ColorsType = {
  light: string;
  main: string;
  dark: string;
};

export type ColorNamesType = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'danger' | 'warning' | 'gray';
export type ColorNamesVariation = 'main' | 'dark' | 'light';

type ColorPalette<C extends ColorNamesType = ColorNamesType, V extends ColorNamesVariation = ColorNamesVariation> =
  | `${C}`
  | `${C}.${V}`;

type SingleColorType = 'white' | 'transparent' | 'black';
export type ColorType = ColorPalette | SingleColorType;
export type ColorVariationsType = {
  [key in ColorNamesType]: {
    [key in ColorNamesVariation]: string;
  };
};
export type PalleteType = {
  [key in SingleColorType]: string;
} &
  ColorVariationsType;

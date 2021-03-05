import { TokenPropsType, ColorType } from '../../types';

export type ColorPropsType = 'color';
export type BackgroundColorPropsType = 'backgroundColor';
export type BorderColorPropsType = 'borderColor';

export type ColorTokenProps = TokenPropsType<ColorPropsType, ColorType>;
export type BackgroundColorTokenProps = TokenPropsType<BackgroundColorPropsType, ColorType>;
export type BorderColorTokenProps = TokenPropsType<BorderColorPropsType, ColorType>;

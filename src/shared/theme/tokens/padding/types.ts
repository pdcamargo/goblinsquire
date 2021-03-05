import { TokenPropsType, SpacingType } from '../../types';

type PaddingPropsAbbreviationType = 'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'px' | 'py';
type PaddingPropsFullNameType =
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingX'
  | 'paddingY';
export type PaddingPropsType = PaddingPropsAbbreviationType | PaddingPropsFullNameType;

export type PaddingTokenProps = TokenPropsType<PaddingPropsType, SpacingType>;

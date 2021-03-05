import { TokenPropsType, SpacingType } from '../../types';

type MarginPropsAbbreviationType = 'm' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my';
type MarginPropsFullNameType =
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginX'
  | 'marginY';
export type MarginPropsType = MarginPropsAbbreviationType | MarginPropsFullNameType;

export type MarginTokenProps = TokenPropsType<MarginPropsType, SpacingType>;

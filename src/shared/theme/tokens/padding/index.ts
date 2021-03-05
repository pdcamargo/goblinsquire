import { css } from 'styled-components';

import { PaddingPropsType } from './types';

import { SpacingType, CssPropsRepresentation } from '../../types';
import { generateTokenCss } from '../utils';
import { getThemeToken } from '../../helpers';

const cssRepresentation: CssPropsRepresentation<PaddingPropsType> = {
  p: 'padding',
  padding: 'padding',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  paddingTop: 'padding-top',
  paddingX: ['padding-left', 'padding-right'],
  paddingY: ['padding-top', 'padding-bottom'],
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  px: ['padding-left', 'padding-right'],
  py: ['padding-top', 'padding-bottom'],
};

const parsePadding = (currentVal: SpacingType) => getThemeToken('space', currentVal);

export const paddingToken = css`
  ${(props) => generateTokenCss<PaddingPropsType, SpacingType>(props, cssRepresentation, parsePadding)}
`;
export * from './types';

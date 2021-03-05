import { css } from 'styled-components';

import { MarginPropsType } from './types';

import { SpacingType, CssPropsRepresentation } from '../../types';
import { generateTokenCss } from '../utils';
import { getThemeToken } from '../../helpers';

const cssRepresentation: CssPropsRepresentation<MarginPropsType> = {
  m: 'margin',
  margin: 'margin',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  marginTop: 'margin-top',
  marginX: ['margin-left', 'margin-right'],
  marginY: ['margin-top', 'margin-bottom'],
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mx: ['margin-left', 'margin-right'],
  my: ['margin-top', 'margin-bottom'],
};

const parseMargin = (currentVal: SpacingType) => getThemeToken('space', currentVal);

export const marginToken = css`
  ${(props) => generateTokenCss<MarginPropsType, SpacingType>(props, cssRepresentation, parseMargin)}
`;
export * from './types';

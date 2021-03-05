import { css } from 'styled-components';

import { BorderPropsType } from './types';

import { CssPropsRepresentation } from '../../types';
import { getThemeToken } from '../../helpers';
import { generateTokenCss } from '../utils';

const colorCssRepresentation: CssPropsRepresentation<BorderPropsType> = {
  border: 'border',
};

export const borderToken = css`
  ${(props) => generateTokenCss<BorderPropsType, string>(props, colorCssRepresentation)}
`;
export * from './types';

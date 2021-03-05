import styled from 'styled-components';

import { allColorToken, allBorderToken, marginToken, paddingToken } from '@theme/tokens';

import { BaseProps } from './types';

const Base = styled.div<BaseProps>`
  ${allBorderToken}
  ${marginToken}
  ${paddingToken}
  ${allColorToken}
`;

export default Base;

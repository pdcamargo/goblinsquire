import { DefaultTheme, ThemeProps } from 'styled-components';
import { CssPropsRepresentation } from '../types';
import { generateResponsiveValue } from '../utils';

export const generateTokenCss = <PropsType extends string, TokenValueType extends string>(
  props: ThemeProps<DefaultTheme>,
  propsCssRepresentation: CssPropsRepresentation<PropsType>,
  parser?: (oldValue: TokenValueType) => string,
) => {
  return Object.entries(propsCssRepresentation).reduce((previous, [key, value]) => {
    const representationValue = value as string | string[];

    const propValue = props[key];

    if (!propValue) return previous;

    if (Array.isArray(representationValue)) {
      representationValue.forEach((cssKey) => {
        previous += generateResponsiveValue<TokenValueType>(cssKey, propValue, parser);
      });
    } else {
      previous += generateResponsiveValue<TokenValueType>(representationValue, propValue, parser);
    }

    return previous;
  }, '');
};

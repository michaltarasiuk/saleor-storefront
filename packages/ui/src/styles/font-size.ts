import * as stylex from '@stylexjs/stylex';
import {typographyFontSize} from '../variables/tokens.stylex';

export const fontSizeStyles = stylex.create({
  extraSmall: {
    fontSize: typographyFontSize.extraSmall,
  },
  small: {
    fontSize: typographyFontSize.small,
  },
  base: {
    fontSize: typographyFontSize.base,
  },
  medium: {
    fontSize: typographyFontSize.medium,
  },
  large: {
    fontSize: typographyFontSize.large,
  },
  extraLarge: {
    fontSize: typographyFontSize.extraLarge,
  },
});

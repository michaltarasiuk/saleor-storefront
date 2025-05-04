import * as stylex from '@stylexjs/stylex';

import {typographyPrimary} from '../variables/tokens.stylex';

export type Emphasis = keyof typeof emphasisStyles;

export const emphasisStyles = stylex.create({
  base: {
    fontWeight: typographyPrimary.base,
  },
  bold: {
    fontWeight: typographyPrimary.bold,
  },
  italic: {
    fontStyle: 'italic',
  },
});

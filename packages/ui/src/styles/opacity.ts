import * as stylex from '@stylexjs/stylex';

import {opacity} from '../variables/tokens.stylex';

export type Opacity = keyof typeof opacityStyles;

export const opacityStyles = stylex.create({
  10: {
    opacity: opacity[10],
  },
  20: {
    opacity: opacity[20],
  },
  30: {
    opacity: opacity[30],
  },
  40: {
    opacity: opacity[40],
  },
  50: {
    opacity: opacity[50],
  },
  60: {
    opacity: opacity[60],
  },
  70: {
    opacity: opacity[70],
  },
  80: {
    opacity: opacity[80],
  },
  90: {
    opacity: opacity[90],
  },
});

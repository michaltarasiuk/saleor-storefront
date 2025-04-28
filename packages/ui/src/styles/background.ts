import * as stylex from '@stylexjs/stylex';

import {baseColors} from '../variables/colors.stylex';

export type Background = keyof typeof backgroundStyles;

export const backgroundStyles = stylex.create({
  transparent: {
    backgroundColor: 'transparent',
  },
  base: {
    backgroundColor: baseColors.background,
  },
  subdued: {
    backgroundColor: baseColors.backgroundSubdued,
  },
});

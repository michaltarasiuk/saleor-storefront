import * as stylex from '@stylexjs/stylex';

export type Overflow = keyof typeof overflowStyles;

export const overflowStyles = stylex.create({
  hidden: {
    overflow: 'hidden',
  },
  visible: {
    overflow: 'visible',
  },
});

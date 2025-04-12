import * as stylex from '@stylexjs/stylex';

const spin = stylex.keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const animations = stylex.defineVars({
  spin,
});

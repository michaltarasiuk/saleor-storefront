import * as stylex from '@stylexjs/stylex';

const spin = stylex.keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const animations = stylex.defineVars({
  spin,
});

export const transition = stylex.defineVars({
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});

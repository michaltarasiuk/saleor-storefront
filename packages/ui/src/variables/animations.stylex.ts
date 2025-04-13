import * as stylex from '@stylexjs/stylex';

import {opacity} from './tokens.stylex';

const spin = stylex.keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

const pulse = stylex.keyframes({
  '50%': {
    opacity: opacity[50],
  },
});

export const animations = stylex.defineVars({
  spin,
  pulse,
});

export const transition = stylex.defineVars({
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});

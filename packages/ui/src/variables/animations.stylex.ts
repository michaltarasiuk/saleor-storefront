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

export const animationDurations = stylex.defineVars({
  base: stylex.types.time('1s'),
  long: stylex.types.time('2s'),
});

export const transitionProperties = stylex.defineVars({
  color:
    'color, background-color, border-color, text-decoration-color, fill, stroke',
  shadow: 'box-shadow',
});

export const transitionDurations = stylex.defineVars({
  base: stylex.types.time('150ms'),
});

export const transitionTimingFunctions = stylex.defineVars({
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
});

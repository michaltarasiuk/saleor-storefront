'use client';

import * as stylex from '@stylexjs/stylex';

import {useReducedMotionPreference} from './hooks/use-reduced-motion-preference';
import {SpinnerIcon} from './icons/SpinnerIcon';
import {Text} from './Text';
import {animations} from './variables/animations.stylex';

interface SpinnerProps {
  readonly accessibilityLabel: string;
  readonly size?: keyof typeof sizeStyles;
}

export function Spinner({accessibilityLabel, size = 'base'}: SpinnerProps) {
  const reducedMotionPreference = useReducedMotionPreference();
  if (!reducedMotionPreference) {
    return (
      <div
        aria-label={accessibilityLabel}
        {...stylex.props(styles.base, sizeStyles[size])}>
        <SpinnerIcon />
      </div>
    );
  }
  return <Text>{accessibilityLabel}</Text>;
}

const styles = stylex.create({
  base: {
    animation: animations.spin,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
});

const sizeStyles = stylex.create({
  base: {
    width: '20px',
    height: '20px',
  },
  large: {
    width: '64px',
    height: '64px',
  },
});

'use client';

import * as stylex from '@stylexjs/stylex';
import {useVisuallyHidden} from 'react-aria';

import {usePrefersReducedMotion} from './hooks/use-prefers-reduced-motion';
import {SpinnerIcon} from './icons/SpinnerIcon';
import {Text} from './Text';
import {animations} from './variables/animations.stylex';

interface SpinnerProps {
  readonly accessibilityLabel?: string;
  readonly size?: keyof typeof sizeStyles;
  readonly style?: stylex.StyleXStyles;
}

export function Spinner({
  accessibilityLabel,
  size = 'base',
  style,
}: SpinnerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const {visuallyHiddenProps} = useVisuallyHidden();
  if (!prefersReducedMotion) {
    return (
      <div {...stylex.props(styles.base, sizeStyles[size])}>
        <SpinnerIcon aria-hidden="true" {...stylex.props(style)} />
        <div {...visuallyHiddenProps}>
          <Text>{accessibilityLabel}</Text>
        </div>
      </div>
    );
  }
  return <Text>{accessibilityLabel}</Text>;
}

const styles = stylex.create({
  base: {
    flexShrink: 0,
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

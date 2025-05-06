import * as stylex from '@stylexjs/stylex';

import type {FontSize} from './styles/font-size';
import {Text} from './Text';
import {animationDurations, animations} from './variables/animations.stylex';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

interface SkeletonTextProps {
  readonly size?: FontSize;
  readonly inlineSize?: keyof typeof inlineSizeStyles;
  readonly style?: stylex.StyleXStyles;
}

export function SkeletonText({
  size = 'base',
  inlineSize = 'small',
  style,
}: SkeletonTextProps) {
  return (
    <div
      aria-hidden="true"
      {...stylex.props(styles.base, inlineSizeStyles[inlineSize], style)}>
      <Text size={size}>{'\u200B'}</Text>
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: 'relative',
    maxInlineSize: '100%',
    '::after': {
      content: '',
      position: 'absolute',
      height: '75%',
      width: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: baseColors.border,
      borderRadius: cornerRadius.base,
      animation: animations.pulse,
      animationDuration: animationDurations.long,
      animationIterationCount: 'infinite',
    },
  },
});

const inlineSizeStyles = stylex.create({
  small: {
    inlineSize: '5rem',
  },
  base: {
    inlineSize: '11rem',
  },
  large: {
    inlineSize: '16rem',
  },
});

import * as stylex from '@stylexjs/stylex';

import type {FontSize} from './styles/font-size';
import {Text} from './Text';
import {animationDurations, animations} from './variables/animations.stylex';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

interface SkeletonTextProps {
  readonly size?: FontSize;
  readonly style?: stylex.StyleXStyles;
}

export function SkeletonText({size = 'base', style}: SkeletonTextProps) {
  return (
    <div aria-hidden="true" {...stylex.props(styles.base, style)}>
      <Text size={size}>{'\u200B'}</Text>
    </div>
  );
}

const styles = stylex.create({
  base: {
    backgroundColor: baseColors.border,
    borderRadius: cornerRadius.base,
    animation: animations.pulse,
    animationDuration: animationDurations.long,
    animationIterationCount: 'infinite',
  },
});

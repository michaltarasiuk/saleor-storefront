import * as stylex from '@stylexjs/stylex';

import {Text, type TextSize} from './Text';
import {animations} from './variables/animations.stylex';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

interface SkeletonTextProps {
  readonly size?: TextSize;
}

export function SkeletonText({size = 'base'}: SkeletonTextProps) {
  return (
    <div aria-hidden="true" {...stylex.props(styles.base)}>
      <Text size={size}>{'\u200B'}</Text>
    </div>
  );
}

const styles = stylex.create({
  base: {
    backgroundColor: baseColors.border,
    borderRadius: cornerRadius.base,
    animation: animations.pulse,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
});

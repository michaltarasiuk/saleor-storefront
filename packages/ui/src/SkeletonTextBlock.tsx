import {assertNever} from '@repo/utils/assert-never';
import * as stylex from '@stylexjs/stylex';

import {SkeletonText} from './SkeletonText';
import type {fontSizeStyles} from './styles/font-size';
import {animations} from './variables/animations.stylex';
import {spacing} from './variables/tokens.stylex';

interface SkeletonTextBlockProps {
  readonly lines: number;
  readonly size?: keyof typeof fontSizeStyles;
}

export function SkeletonTextBlock({
  lines,
  size = 'base',
}: SkeletonTextBlockProps) {
  return (
    <div
      aria-hidden="true"
      {...stylex.props(styles.base, styles.gap(mapSizeToGap(size)))}>
      {Array.from({length: lines}, (_, i) => (
        <SkeletonText key={i} size={size} />
      ))}
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    animation: animations.pulse,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
  gap: (gap: string) => ({gap}),
});

function mapSizeToGap(size: keyof typeof fontSizeStyles) {
  switch (size) {
    case 'extraSmall':
    case 'small': {
      return spacing.small400;
    }
    case 'base':
    case 'medium': {
      return spacing.small300;
    }
    case 'large': {
      return spacing.small100;
    }
    case 'extraLarge': {
      return spacing.base;
    }
    default: {
      assertNever(size);
    }
  }
}

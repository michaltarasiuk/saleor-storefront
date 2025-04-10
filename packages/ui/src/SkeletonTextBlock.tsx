import {assertNever} from '@repo/utils/assert-never';
import * as stylex from '@stylexjs/stylex';

import {baseColors} from './variables/colors.stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

interface SkeletonTextBlockProps {
  readonly lines: number;
  readonly size?: keyof typeof lineSizeStyles;
}

export function SkeletonTextBlock({
  lines: linesCount,
  size = 'base',
}: SkeletonTextBlockProps) {
  return (
    <div
      {...stylex.props(
        skeletonTextStyles.base,
        skeletonTextStyles.gap(sizeToGap(size)),
      )}>
      {Array.from({length: linesCount}, (_, i) => (
        <div key={i} {...stylex.props(lineStyles.base, lineSizeStyles[size])} />
      ))}
    </div>
  );
}

const skeletonTextStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  gap: (gap: string) => ({gap}),
});

const lineStyles = stylex.create({
  base: {
    borderRadius: cornerRadius.base,
    backgroundColor: baseColors.border,
    ':last-of-type': {
      width: '85%',
    },
  },
  last: {
    width: '80%',
  },
});

const lineSizeStyles = stylex.create({
  extraSmall: {
    height: '11.5px',
  },
  small: {
    height: '14px',
  },
  base: {
    height: '16.5px',
  },
  medium: {
    height: '21px',
  },
  large: {
    height: '28px',
  },
  extraLarge: {
    height: '35px',
  },
});

function sizeToGap(size: keyof typeof lineSizeStyles) {
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

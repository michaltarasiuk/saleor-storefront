import * as stylex from '@stylexjs/stylex';
import type {CSSProperties} from 'react';

import {animations} from './variables/animations.stylex';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

type Size = number | `${number}%` | 'fill';

interface SkeletonImageProps {
  readonly blockSize?: Size;
  readonly inlineSize?: Size;
}

export function SkeletonImage({
  blockSize = 'fill',
  inlineSize = 'fill',
}: SkeletonImageProps) {
  return (
    <div
      aria-hidden="true"
      {...stylex.props(
        styles.base,
        styles.size(formatSize(blockSize), formatSize(inlineSize))
      )}
    />
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
  size: (
    blockSize: CSSProperties['blockSize'],
    inlineSize: CSSProperties['blockSize']
  ) => ({
    blockSize,
    inlineSize,
  }),
});

function formatSize(
  size: Size
): CSSProperties['blockSize'] | CSSProperties['inlineSize'] {
  return size === 'fill' ? '100%' : size;
}

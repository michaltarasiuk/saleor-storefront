import * as stylex from '@stylexjs/stylex';
import {CSSProperties} from 'react';

import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

type Size = number | `${number}%` | 'fill';

interface SkeletonImageProps {
  readonly aspectRatio?: number;
  readonly blockSize?: Size;
  readonly inlineSize?: Size;
}

export function SkeletonImage({
  aspectRatio,
  blockSize,
  inlineSize,
}: SkeletonImageProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        styles.size(
          blockSize && formatSize(blockSize),
          inlineSize && formatSize(inlineSize)
        ),
        styles.aspectRatio(aspectRatio)
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    backgroundColor: baseColors.border,
    borderRadius: cornerRadius.base,
  },
  size: (
    blockSize: CSSProperties['blockSize'],
    inlineSize: CSSProperties['blockSize']
  ) => ({
    blockSize,
    inlineSize,
  }),
  aspectRatio: (aspectRatio: CSSProperties['aspectRatio']) => ({
    aspectRatio,
  }),
});

function formatSize(
  size: Size
): CSSProperties['blockSize'] | CSSProperties['inlineSize'] {
  return size === 'fill' ? '100%' : size;
}

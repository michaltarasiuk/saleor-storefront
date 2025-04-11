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
  assertValidProps({aspectRatio, blockSize, inlineSize});
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

function assertValidProps({
  aspectRatio,
  blockSize,
  inlineSize,
}: SkeletonImageProps) {
  if (aspectRatio) {
    if (blockSize && inlineSize) {
      throw new Error(
        'Provide only one of "blockSize" or "inlineSize" with "aspectRatio".'
      );
    }
    if (!blockSize && !inlineSize) {
      throw new Error(
        'Provide "blockSize" or "inlineSize" with "aspectRatio".'
      );
    }
  }
}

function formatSize(size: Size) {
  let formattedSize: CSSProperties['blockSize'] | CSSProperties['inlineSize'];
  if (size === 'fill') {
    formattedSize = '100%';
  } else {
    formattedSize = size;
  }
  return formattedSize;
}

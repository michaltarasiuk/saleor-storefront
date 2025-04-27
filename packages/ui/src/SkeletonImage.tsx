import * as stylex from '@stylexjs/stylex';

import type {Size} from './utils/format-size';
import {formatSize} from './utils/format-size';
import {animations} from './variables/animations.stylex';
import {baseColors} from './variables/colors.stylex';
import {cornerRadius} from './variables/tokens.stylex';

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
    blockSize: React.CSSProperties['blockSize'],
    inlineSize: React.CSSProperties['blockSize']
  ) => ({
    blockSize,
    inlineSize,
  }),
});

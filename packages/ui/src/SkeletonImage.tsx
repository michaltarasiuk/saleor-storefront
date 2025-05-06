import * as stylex from '@stylexjs/stylex';

import {formatSize, type Size} from './utils/format-size';
import {animationDurations, animations} from './variables/animations.stylex';
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
    animationDuration: animationDurations.base,
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

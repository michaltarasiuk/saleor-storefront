import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from './consts/media-query';
import {type Spacing, SpacingTokens} from './styles/spacing.stylex';

interface BlockSpacerProps {
  readonly spacing?: Spacing;
}

export function BlockSpacer({spacing = 'base'}: BlockSpacerProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        spacingStyles.default(SpacingTokens[spacing])
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    inlineSize: '100%',
    flexShrink: 0,
  },
});

const spacingStyles = stylex.create({
  default: (blockSize: React.CSSProperties['blockSize']) => ({
    blockSize,
  }),
  small: (blockSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      blockSize,
    },
  }),
  medium: (blockSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      blockSize,
    },
  }),
  large: (blockSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      blockSize,
    },
  }),
  extraLarge: (blockSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      blockSize,
    },
  }),
  extraExtraLarge: (blockSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      blockSize,
    },
  }),
});

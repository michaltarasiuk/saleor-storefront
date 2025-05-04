import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from './consts/media-query';
import {getSpacingToken, type Spacing} from './styles/spacing.stylex';

interface InlineSpacerProps {
  readonly spacing?: Spacing;
}

export function InlineSpacer({spacing = 'base'}: InlineSpacerProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        spacingStyles.default(getSpacingToken(spacing))
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    blockSize: '100%',
    flexShrink: 0,
  },
});

const spacingStyles = stylex.create({
  default: (inlineSize: React.CSSProperties['blockSize']) => ({
    inlineSize,
  }),
  small: (inlineSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      inlineSize,
    },
  }),
  medium: (inlineSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      inlineSize,
    },
  }),
  large: (inlineSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      inlineSize,
    },
  }),
  extraLarge: (inlineSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      inlineSize,
    },
  }),
  extraExtraLarge: (inlineSize: React.CSSProperties['blockSize']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      inlineSize,
    },
  }),
});

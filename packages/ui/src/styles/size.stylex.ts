import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import {formatSize, type Size} from '../utils/format-size';

export interface SizeProps {
  readonly minBlockSize?: Size;
  readonly maxBlockSize?: Size;
  readonly minInlineSize?: Size;
  readonly maxInlineSize?: Size;
}

export function getSizeStyles({
  minBlockSize,
  maxBlockSize,
  minInlineSize,
  maxInlineSize,
}: SizeProps) {
  return [
    !!minBlockSize && minBlockSizeStyles.default(formatSize(minBlockSize)),
    !!maxBlockSize && maxBlockSizeStyles.default(formatSize(maxBlockSize)),
    !!minInlineSize && minInlineSizeStyles.default(formatSize(minInlineSize)),
    !!maxInlineSize && maxInlineSizeStyles.default(formatSize(maxInlineSize)),
  ];
}

const minBlockSizeStyles = stylex.create({
  default: (minBlockSize: React.CSSProperties['minBlockSize']) => ({
    minBlockSize,
  }),
  small: (minBlockSize: React.CSSProperties['minBlockSize']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      minBlockSize,
    },
  }),
  medium: (minBlockSize: React.CSSProperties['minBlockSize']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      minBlockSize,
    },
  }),
  large: (minBlockSize: React.CSSProperties['minBlockSize']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      minBlockSize,
    },
  }),
  extraLarge: (minBlockSize: React.CSSProperties['minBlockSize']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      minBlockSize,
    },
  }),
  extraExtraLarge: (minBlockSize: React.CSSProperties['minBlockSize']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      minBlockSize,
    },
  }),
});

const maxBlockSizeStyles = stylex.create({
  default: (maxBlockSize: React.CSSProperties['maxBlockSize']) => ({
    maxBlockSize,
  }),
  small: (maxBlockSize: React.CSSProperties['maxBlockSize']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      maxBlockSize,
    },
  }),
  medium: (maxBlockSize: React.CSSProperties['maxBlockSize']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      maxBlockSize,
    },
  }),
  large: (maxBlockSize: React.CSSProperties['maxBlockSize']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      maxBlockSize,
    },
  }),
  extraLarge: (maxBlockSize: React.CSSProperties['maxBlockSize']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      maxBlockSize,
    },
  }),
  extraExtraLarge: (maxBlockSize: React.CSSProperties['maxBlockSize']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      maxBlockSize,
    },
  }),
});

const minInlineSizeStyles = stylex.create({
  default: (minInlineSize: React.CSSProperties['minInlineSize']) => ({
    minInlineSize,
  }),
  small: (minInlineSize: React.CSSProperties['minInlineSize']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      minInlineSize,
    },
  }),
  medium: (minInlineSize: React.CSSProperties['minInlineSize']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      minInlineSize,
    },
  }),
  large: (minInlineSize: React.CSSProperties['minInlineSize']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      minInlineSize,
    },
  }),
  extraLarge: (minInlineSize: React.CSSProperties['minInlineSize']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      minInlineSize,
    },
  }),
  extraExtraLarge: (minInlineSize: React.CSSProperties['minInlineSize']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      minInlineSize,
    },
  }),
});

const maxInlineSizeStyles = stylex.create({
  default: (maxInlineSize: React.CSSProperties['maxInlineSize']) => ({
    maxInlineSize,
  }),
  small: (maxInlineSize: React.CSSProperties['maxInlineSize']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      maxInlineSize,
    },
  }),
  medium: (maxInlineSize: React.CSSProperties['maxInlineSize']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      maxInlineSize,
    },
  }),
  large: (maxInlineSize: React.CSSProperties['maxInlineSize']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      maxInlineSize,
    },
  }),
  extraLarge: (maxInlineSize: React.CSSProperties['maxInlineSize']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      maxInlineSize,
    },
  }),
  extraExtraLarge: (maxInlineSize: React.CSSProperties['maxInlineSize']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      maxInlineSize,
    },
  }),
});

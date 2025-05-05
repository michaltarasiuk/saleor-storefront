import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import {formatSize, type Size} from '../utils/format-size';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';

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
    !!minBlockSize &&
      minBlockSizeStyles.base(
        normalizeResponsiveStyle({default: formatSize(minBlockSize)})
      ),
    !!maxBlockSize &&
      maxBlockSizeStyles.base(
        normalizeResponsiveStyle({default: formatSize(maxBlockSize)})
      ),
    !!minInlineSize &&
      minInlineSizeStyles.base(
        normalizeResponsiveStyle({default: formatSize(minInlineSize)})
      ),
    !!maxInlineSize &&
      maxInlineSizeStyles.base(
        normalizeResponsiveStyle({default: formatSize(maxInlineSize)})
      ),
  ];
}

const minBlockSizeStyles = stylex.create({
  base: (
    minBlockSize: NormalizedResponsiveStyle<React.CSSProperties['minBlockSize']>
  ) => ({
    minBlockSize: {
      default: minBlockSize.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        minBlockSize.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        minBlockSize.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        minBlockSize.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        minBlockSize.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        minBlockSize.extraExtraLarge,
    },
  }),
});

const maxBlockSizeStyles = stylex.create({
  base: (
    maxBlockSize: NormalizedResponsiveStyle<React.CSSProperties['maxBlockSize']>
  ) => ({
    maxBlockSize: {
      default: maxBlockSize.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        maxBlockSize.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        maxBlockSize.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        maxBlockSize.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        maxBlockSize.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        maxBlockSize.extraExtraLarge,
    },
  }),
});

const minInlineSizeStyles = stylex.create({
  base: (
    minInlineSize: NormalizedResponsiveStyle<
      React.CSSProperties['minInlineSize']
    >
  ) => ({
    minInlineSize: {
      default: minInlineSize.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        minInlineSize.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        minInlineSize.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        minInlineSize.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        minInlineSize.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        minInlineSize.extraExtraLarge,
    },
  }),
});

const maxInlineSizeStyles = stylex.create({
  base: (
    maxInlineSize: NormalizedResponsiveStyle<
      React.CSSProperties['maxInlineSize']
    >
  ) => ({
    maxInlineSize: {
      default: maxInlineSize.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        maxInlineSize.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        maxInlineSize.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        maxInlineSize.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        maxInlineSize.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        maxInlineSize.extraExtraLarge,
    },
  }),
});

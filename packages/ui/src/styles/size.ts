import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from '../consts/responsive';
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
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        minBlockSize.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        minBlockSize.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        minBlockSize.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        minBlockSize.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
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
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        maxBlockSize.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        maxBlockSize.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        maxBlockSize.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        maxBlockSize.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
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
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        minInlineSize.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        minInlineSize.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        minInlineSize.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        minInlineSize.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
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
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        maxInlineSize.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        maxInlineSize.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        maxInlineSize.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        maxInlineSize.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        maxInlineSize.extraExtraLarge,
    },
  }),
});

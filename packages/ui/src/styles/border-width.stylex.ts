import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {borderWidth} from '../variables/tokens.stylex';

export type BorderWidth = 'base' | 'medium' | 'thick';

export function getBorderWidthStyles(
  borderWidth: MaybeShorthandProperty<BorderWidth>
) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderWidth(borderWidth);
  return [
    borderBlockStartWidthStyles.default(getBorderWidthToken(blockStart)),
    borderInlineEndWidthStyles.default(getBorderWidthToken(inlineEnd)),
    borderBlockEndWidthStyles.default(getBorderWidthToken(blockEnd)),
    borderInlineStartWidthStyles.default(getBorderWidthToken(inlineStart)),
  ];
}

function normalizeBorderWidth(
  borderWidth: MaybeShorthandProperty<BorderWidth>
) {
  if (!isArray(borderWidth)) {
    return [borderWidth, borderWidth, borderWidth, borderWidth];
  }
  switch (borderWidth.length) {
    case 2:
      return [
        borderWidth[1],
        borderWidth[0],
        borderWidth[1],
        borderWidth[0],
      ] as const;
    case 4:
      return borderWidth;
    default:
      assertNever(borderWidth);
  }
}

function getBorderWidthToken(borderWidthKey: BorderWidth) {
  switch (borderWidthKey) {
    case 'base':
      return borderWidth.base;
    case 'medium':
      return borderWidth.medium;
    case 'thick':
      return borderWidth.thick;
    default:
      assertNever(borderWidthKey);
  }
}

const borderBlockStartWidthStyles = stylex.create({
  default: (
    borderBlockStartWidth: React.CSSProperties['borderBlockStartWidth']
  ) => ({
    borderBlockStartWidth,
  }),
  small: (
    borderBlockStartWidth: React.CSSProperties['borderBlockStartWidth']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderBlockStartWidth,
    },
  }),
  medium: (
    borderBlockStartWidth: React.CSSProperties['borderBlockStartWidth']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderBlockStartWidth,
    },
  }),
  large: (
    borderBlockStartWidth: React.CSSProperties['borderBlockStartWidth']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderBlockStartWidth,
    },
  }),
  extraLarge: (
    borderBlockStartWidth: React.CSSProperties['borderBlockStartWidth']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderBlockStartWidth,
    },
  }),
  extraExtraLarge: (
    borderBlockStartWidth: React.CSSProperties['borderBlockStartWidth']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderBlockStartWidth,
    },
  }),
});

const borderBlockEndWidthStyles = stylex.create({
  default: (
    borderBlockEndWidth: React.CSSProperties['borderBlockEndWidth']
  ) => ({
    borderBlockEndWidth,
  }),
  small: (borderBlockEndWidth: React.CSSProperties['borderBlockEndWidth']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderBlockEndWidth,
    },
  }),
  medium: (
    borderBlockEndWidth: React.CSSProperties['borderBlockEndWidth']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderBlockEndWidth,
    },
  }),
  large: (borderBlockEndWidth: React.CSSProperties['borderBlockEndWidth']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderBlockEndWidth,
    },
  }),
  extraLarge: (
    borderBlockEndWidth: React.CSSProperties['borderBlockEndWidth']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderBlockEndWidth,
    },
  }),
  extraExtraLarge: (
    borderBlockEndWidth: React.CSSProperties['borderBlockEndWidth']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderBlockEndWidth,
    },
  }),
});

const borderInlineStartWidthStyles = stylex.create({
  default: (
    borderInlineStartWidth: React.CSSProperties['borderInlineStartWidth']
  ) => ({
    borderInlineStartWidth,
  }),
  small: (
    borderInlineStartWidth: React.CSSProperties['borderInlineStartWidth']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderInlineStartWidth,
    },
  }),
  medium: (
    borderInlineStartWidth: React.CSSProperties['borderInlineStartWidth']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderInlineStartWidth,
    },
  }),
  large: (
    borderInlineStartWidth: React.CSSProperties['borderInlineStartWidth']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderInlineStartWidth,
    },
  }),
  extraLarge: (
    borderInlineStartWidth: React.CSSProperties['borderInlineStartWidth']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderInlineStartWidth,
    },
  }),
  extraExtraLarge: (
    borderInlineStartWidth: React.CSSProperties['borderInlineStartWidth']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderInlineStartWidth,
    },
  }),
});

const borderInlineEndWidthStyles = stylex.create({
  default: (
    borderInlineEndWidth: React.CSSProperties['borderInlineEndWidth']
  ) => ({
    borderInlineEndWidth,
  }),
  small: (
    borderInlineEndWidth: React.CSSProperties['borderInlineEndWidth']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderInlineEndWidth,
    },
  }),
  medium: (
    borderInlineEndWidth: React.CSSProperties['borderInlineEndWidth']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderInlineEndWidth,
    },
  }),
  large: (
    borderInlineEndWidth: React.CSSProperties['borderInlineEndWidth']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderInlineEndWidth,
    },
  }),
  extraLarge: (
    borderInlineEndWidth: React.CSSProperties['borderInlineEndWidth']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderInlineEndWidth,
    },
  }),
  extraExtraLarge: (
    borderInlineEndWidth: React.CSSProperties['borderInlineEndWidth']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderInlineEndWidth,
    },
  }),
});

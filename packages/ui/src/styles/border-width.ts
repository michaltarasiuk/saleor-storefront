import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedMediaQueryStyle,
  normalizeMediaQueryStyle,
} from '../utils/media-query';
import {borderWidth} from '../variables/tokens.stylex';

export type BorderWidth = 'base' | 'medium' | 'thick';

export function getBorderWidthStyles(
  borderWidth: MaybeShorthandProperty<BorderWidth>
) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderWidth(borderWidth);
  return [
    borderBlockStartWidthStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderWidthToken(blockStart),
      })
    ),
    borderInlineEndWidthStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderWidthToken(inlineEnd),
      })
    ),
    borderBlockEndWidthStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderWidthToken(blockEnd),
      })
    ),
    borderInlineStartWidthStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderWidthToken(inlineStart),
      })
    ),
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
  base: (
    borderBlockStartWidth: NormalizedMediaQueryStyle<
      React.CSSProperties['borderBlockStartWidth']
    >
  ) => ({
    borderBlockStartWidth: {
      default: borderBlockStartWidth.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderBlockStartWidth.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderBlockStartWidth.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderBlockStartWidth.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderBlockStartWidth.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderBlockStartWidth.extraExtraLarge,
    },
  }),
});

const borderBlockEndWidthStyles = stylex.create({
  base: (
    borderBlockEndWidth: NormalizedMediaQueryStyle<
      React.CSSProperties['borderBlockEndWidth']
    >
  ) => ({
    borderBlockEndWidth: {
      default: borderBlockEndWidth.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderBlockEndWidth.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderBlockEndWidth.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderBlockEndWidth.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderBlockEndWidth.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderBlockEndWidth.extraExtraLarge,
    },
  }),
});

const borderInlineStartWidthStyles = stylex.create({
  base: (
    borderInlineStart: NormalizedMediaQueryStyle<
      React.CSSProperties['borderInlineStart']
    >
  ) => ({
    borderInlineStart: {
      default: borderInlineStart.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderInlineStart.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderInlineStart.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderInlineStart.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderInlineStart.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderInlineStart.extraExtraLarge,
    },
  }),
});

const borderInlineEndWidthStyles = stylex.create({
  base: (
    borderInlineEndWidth: NormalizedMediaQueryStyle<
      React.CSSProperties['borderInlineEndWidth']
    >
  ) => ({
    orderInlineEndWidth: {
      default: borderInlineEndWidth.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderInlineEndWidth.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderInlineEndWidth.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderInlineEndWidth.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderInlineEndWidth.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderInlineEndWidth.extraExtraLarge,
    },
  }),
});

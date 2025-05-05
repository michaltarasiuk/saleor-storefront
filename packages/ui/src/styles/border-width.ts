import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from '../consts/responsive';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';
import {borderWidth} from '../variables/tokens.stylex';

export type BorderWidth = 'base' | 'medium' | 'thick';

export function getBorderWidthStyles(
  borderWidth: MaybeShorthandProperty<BorderWidth>
) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderWidth(borderWidth);
  return [
    borderBlockStartWidthStyles.base(
      normalizeResponsiveStyle({
        default: getBorderWidthToken(blockStart),
      })
    ),
    borderInlineEndWidthStyles.base(
      normalizeResponsiveStyle({
        default: getBorderWidthToken(inlineEnd),
      })
    ),
    borderBlockEndWidthStyles.base(
      normalizeResponsiveStyle({
        default: getBorderWidthToken(blockEnd),
      })
    ),
    borderInlineStartWidthStyles.base(
      normalizeResponsiveStyle({
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
    borderBlockStartWidth: NormalizedResponsiveStyle<
      React.CSSProperties['borderBlockStartWidth']
    >
  ) => ({
    borderBlockStartWidth: {
      default: borderBlockStartWidth.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderBlockStartWidth.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderBlockStartWidth.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderBlockStartWidth.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderBlockStartWidth.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderBlockStartWidth.extraExtraLarge,
    },
  }),
});

const borderBlockEndWidthStyles = stylex.create({
  base: (
    borderBlockEndWidth: NormalizedResponsiveStyle<
      React.CSSProperties['borderBlockEndWidth']
    >
  ) => ({
    borderBlockEndWidth: {
      default: borderBlockEndWidth.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderBlockEndWidth.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderBlockEndWidth.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderBlockEndWidth.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderBlockEndWidth.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderBlockEndWidth.extraExtraLarge,
    },
  }),
});

const borderInlineStartWidthStyles = stylex.create({
  base: (
    borderInlineStart: NormalizedResponsiveStyle<
      React.CSSProperties['borderInlineStart']
    >
  ) => ({
    borderInlineStart: {
      default: borderInlineStart.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderInlineStart.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderInlineStart.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderInlineStart.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderInlineStart.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderInlineStart.extraExtraLarge,
    },
  }),
});

const borderInlineEndWidthStyles = stylex.create({
  base: (
    borderInlineEndWidth: NormalizedResponsiveStyle<
      React.CSSProperties['borderInlineEndWidth']
    >
  ) => ({
    orderInlineEndWidth: {
      default: borderInlineEndWidth.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderInlineEndWidth.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderInlineEndWidth.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderInlineEndWidth.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderInlineEndWidth.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderInlineEndWidth.extraExtraLarge,
    },
  }),
});

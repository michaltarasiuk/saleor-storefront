import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';
import type {DataType} from 'csstype';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedMediaQueryStyle,
  normalizeMediaQueryStyle,
} from '../utils/media-query';

export type BorderStyle = 'base' | 'dashed' | 'dotted' | 'none';

export function getBorderStyleStyles(
  borderStyle: MaybeShorthandProperty<BorderStyle>
) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderStyle(borderStyle);
  return [
    borderBlockStartStyleStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderStyleToken(blockStart),
      })
    ),
    borderInlineEndStyleStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderStyleToken(inlineEnd),
      })
    ),
    borderBlockEndStyleStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderStyleToken(blockEnd),
      })
    ),
    borderInlineStartStyleStyles.base(
      normalizeMediaQueryStyle({
        default: getBorderStyleToken(inlineStart),
      })
    ),
  ];
}

function normalizeBorderStyle(
  borderStyle: MaybeShorthandProperty<BorderStyle>
) {
  if (!isArray(borderStyle)) {
    return [borderStyle, borderStyle, borderStyle, borderStyle];
  }
  switch (borderStyle.length) {
    case 2:
      return [
        borderStyle[1],
        borderStyle[0],
        borderStyle[1],
        borderStyle[0],
      ] as const;
    case 4:
      return borderStyle;
    default:
      assertNever(borderStyle);
  }
}

function getBorderStyleToken(borderStyle: BorderStyle): DataType.LineStyle {
  switch (borderStyle) {
    case 'base':
      return 'solid';
    case 'dashed':
      return 'dashed';
    case 'dotted':
      return 'dotted';
    case 'none':
      return 'none';
    default:
      assertNever(borderStyle);
  }
}

const borderBlockStartStyleStyles = stylex.create({
  base: (
    borderBlockStartStyle: NormalizedMediaQueryStyle<
      React.CSSProperties['borderBlockStartStyle']
    >
  ) => ({
    borderBlockStartStyle: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderBlockStartStyle.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderBlockStartStyle.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderBlockStartStyle.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderBlockStartStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderBlockStartStyle.extraExtraLarge,
    },
  }),
});

const borderBlockEndStyleStyles = stylex.create({
  base: (
    borderBlockEndStyle: NormalizedMediaQueryStyle<
      React.CSSProperties['borderBlockEndStyle']
    >
  ) => ({
    borderBlockEndStyle: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderBlockEndStyle.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderBlockEndStyle.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderBlockEndStyle.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderBlockEndStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderBlockEndStyle.extraExtraLarge,
    },
  }),
});

const borderInlineStartStyleStyles = stylex.create({
  base: (
    borderInlineStartStyle: NormalizedMediaQueryStyle<
      React.CSSProperties['borderInlineStartStyle']
    >
  ) => ({
    borderBlockEndStyle: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderInlineStartStyle.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderInlineStartStyle.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderInlineStartStyle.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderInlineStartStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderInlineStartStyle.extraExtraLarge,
    },
  }),
});

const borderInlineEndStyleStyles = stylex.create({
  base: (
    borderInlineEndStyle: NormalizedMediaQueryStyle<
      React.CSSProperties['borderInlineEndStyle']
    >
  ) => ({
    borderInlineEndStyle: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        borderInlineEndStyle.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        borderInlineEndStyle.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        borderInlineEndStyle.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        borderInlineEndStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        borderInlineEndStyle.extraExtraLarge,
    },
  }),
});

import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';
import type {DataType} from 'csstype';

import type {ViewportInlineSizes} from '../consts/responsive';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';

export type BorderStyle = 'base' | 'dashed' | 'dotted' | 'none';

export function getBorderStyleStyles(
  borderStyle: MaybeShorthandProperty<BorderStyle>
) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderStyle(borderStyle);
  return [
    borderBlockStartStyleStyles.base(
      normalizeResponsiveStyle({
        default: getBorderStyleToken(blockStart),
      })
    ),
    borderInlineEndStyleStyles.base(
      normalizeResponsiveStyle({
        default: getBorderStyleToken(inlineEnd),
      })
    ),
    borderBlockEndStyleStyles.base(
      normalizeResponsiveStyle({
        default: getBorderStyleToken(blockEnd),
      })
    ),
    borderInlineStartStyleStyles.base(
      normalizeResponsiveStyle({
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
    borderBlockStartStyle: NormalizedResponsiveStyle<
      React.CSSProperties['borderBlockStartStyle']
    >
  ) => ({
    borderBlockStartStyle: {
      default: borderBlockStartStyle.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderBlockStartStyle.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderBlockStartStyle.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderBlockStartStyle.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderBlockStartStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderBlockStartStyle.extraExtraLarge,
    },
  }),
});

const borderBlockEndStyleStyles = stylex.create({
  base: (
    borderBlockEndStyle: NormalizedResponsiveStyle<
      React.CSSProperties['borderBlockEndStyle']
    >
  ) => ({
    borderBlockEndStyle: {
      default: borderBlockEndStyle.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderBlockEndStyle.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderBlockEndStyle.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderBlockEndStyle.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderBlockEndStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderBlockEndStyle.extraExtraLarge,
    },
  }),
});

const borderInlineStartStyleStyles = stylex.create({
  base: (
    borderInlineStartStyle: NormalizedResponsiveStyle<
      React.CSSProperties['borderInlineStartStyle']
    >
  ) => ({
    borderBlockEndStyle: {
      default: borderInlineStartStyle.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderInlineStartStyle.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderInlineStartStyle.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderInlineStartStyle.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderInlineStartStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderInlineStartStyle.extraExtraLarge,
    },
  }),
});

const borderInlineEndStyleStyles = stylex.create({
  base: (
    borderInlineEndStyle: NormalizedResponsiveStyle<
      React.CSSProperties['borderInlineEndStyle']
    >
  ) => ({
    borderInlineEndStyle: {
      default: borderInlineEndStyle.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        borderInlineEndStyle.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        borderInlineEndStyle.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        borderInlineEndStyle.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        borderInlineEndStyle.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        borderInlineEndStyle.extraExtraLarge,
    },
  }),
});

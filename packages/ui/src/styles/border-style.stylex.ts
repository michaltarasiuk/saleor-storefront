import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';

export type BorderStyle = keyof typeof BorderStyleTokens;

const BorderStyleTokens = {
  base: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  none: 'none',
} satisfies Record<
  string,
  React.CSSProperties[`border${'Block' | 'Inline'}${'Start' | 'End'}Style`]
>;

export function getBorderStyleStyles(
  borderStyle: MaybeShorthandProperty<BorderStyle>
) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderStyle(borderStyle);
  return [
    borderBlockStartStyleStyles.default(BorderStyleTokens[blockStart]),
    borderInlineEndStyleStyles.default(BorderStyleTokens[inlineEnd]),
    borderBlockEndStyleStyles.default(BorderStyleTokens[blockEnd]),
    borderInlineStartStyleStyles.default(BorderStyleTokens[inlineStart]),
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

const borderBlockStartStyleStyles = stylex.create({
  default: (
    borderBlockStartStyle: React.CSSProperties['borderBlockStartStyle']
  ) => ({
    borderBlockStartStyle,
  }),
  small: (
    borderBlockStartStyle: React.CSSProperties['borderBlockStartStyle']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderBlockStartStyle,
    },
  }),
  medium: (
    borderBlockStartStyle: React.CSSProperties['borderBlockStartStyle']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderBlockStartStyle,
    },
  }),
  large: (
    borderBlockStartStyle: React.CSSProperties['borderBlockStartStyle']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderBlockStartStyle,
    },
  }),
  extraLarge: (
    borderBlockStartStyle: React.CSSProperties['borderBlockStartStyle']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderBlockStartStyle,
    },
  }),
  extraExtraLarge: (
    borderBlockStartStyle: React.CSSProperties['borderBlockStartStyle']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderBlockStartStyle,
    },
  }),
});

const borderBlockEndStyleStyles = stylex.create({
  default: (
    borderBlockEndStyle: React.CSSProperties['borderBlockEndStyle']
  ) => ({
    borderBlockEndStyle,
  }),
  small: (borderBlockEndStyle: React.CSSProperties['borderBlockEndStyle']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderBlockEndStyle,
    },
  }),
  medium: (
    borderBlockEndStyle: React.CSSProperties['borderBlockEndStyle']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderBlockEndStyle,
    },
  }),
  large: (borderBlockEndStyle: React.CSSProperties['borderBlockEndStyle']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderBlockEndStyle,
    },
  }),
  extraLarge: (
    borderBlockEndStyle: React.CSSProperties['borderBlockEndStyle']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderBlockEndStyle,
    },
  }),
  extraExtraLarge: (
    borderBlockEndStyle: React.CSSProperties['borderBlockEndStyle']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderBlockEndStyle,
    },
  }),
});

const borderInlineStartStyleStyles = stylex.create({
  default: (
    borderInlineStartStyle: React.CSSProperties['borderInlineStartStyle']
  ) => ({
    borderInlineStartStyle,
  }),
  small: (
    borderInlineStartStyle: React.CSSProperties['borderInlineStartStyle']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderInlineStartStyle,
    },
  }),
  medium: (
    borderInlineStartStyle: React.CSSProperties['borderInlineStartStyle']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderInlineStartStyle,
    },
  }),
  large: (
    borderInlineStartStyle: React.CSSProperties['borderInlineStartStyle']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderInlineStartStyle,
    },
  }),
  extraLarge: (
    borderInlineStartStyle: React.CSSProperties['borderInlineStartStyle']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderInlineStartStyle,
    },
  }),
  extraExtraLarge: (
    borderInlineStartStyle: React.CSSProperties['borderInlineStartStyle']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderInlineStartStyle,
    },
  }),
});

const borderInlineEndStyleStyles = stylex.create({
  default: (
    borderInlineEndStyle: React.CSSProperties['borderInlineEndStyle']
  ) => ({
    borderInlineEndStyle,
  }),
  small: (
    borderInlineEndStyle: React.CSSProperties['borderInlineEndStyle']
  ) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      borderInlineEndStyle,
    },
  }),
  medium: (
    borderInlineEndStyle: React.CSSProperties['borderInlineEndStyle']
  ) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      borderInlineEndStyle,
    },
  }),
  large: (
    borderInlineEndStyle: React.CSSProperties['borderInlineEndStyle']
  ) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      borderInlineEndStyle,
    },
  }),
  extraLarge: (
    borderInlineEndStyle: React.CSSProperties['borderInlineEndStyle']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      borderInlineEndStyle,
    },
  }),
  extraExtraLarge: (
    borderInlineEndStyle: React.CSSProperties['borderInlineEndStyle']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      borderInlineEndStyle,
    },
  }),
});

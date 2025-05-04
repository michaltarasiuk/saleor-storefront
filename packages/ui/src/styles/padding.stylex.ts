import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {spacing} from '../variables/tokens.stylex';

export type Padding = keyof typeof PaddingTokens;

const PaddingTokens = {
  none: spacing.none,
  extraTight: spacing.small300,
  tight: spacing.small200,
  base: spacing.base,
  loose: spacing.large200,
  extraLoose: spacing.large500,
} satisfies Record<
  string,
  React.CSSProperties[`padding${'Block' | 'Inline'}${'Start' | 'End'}`]
>;

export function getPaddingStyles(padding: MaybeShorthandProperty<Padding>) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizePadding(padding);
  return [
    paddingBlockStartStyles.default(PaddingTokens[blockStart]),
    paddingInlineEndStyles.default(PaddingTokens[inlineEnd]),
    paddingBlockEndStyles.default(PaddingTokens[blockEnd]),
    paddingInlineStartStyles.default(PaddingTokens[inlineStart]),
  ];
}

function normalizePadding(padding: MaybeShorthandProperty<Padding>) {
  if (!isArray(padding)) {
    return [padding, padding, padding, padding];
  }
  switch (padding.length) {
    case 2:
      return [padding[1], padding[0], padding[1], padding[0]] as const;
    case 4:
      return padding;
    default:
      assertNever(padding);
  }
}

const paddingBlockStartStyles = stylex.create({
  default: (paddingBlockStart: React.CSSProperties['paddingBlockStart']) => ({
    paddingBlockStart,
  }),
  small: (paddingBlockStart: React.CSSProperties['paddingBlockStart']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      paddingBlockStart,
    },
  }),
  medium: (paddingBlockStart: React.CSSProperties['paddingBlockStart']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      paddingBlockStart,
    },
  }),
  large: (paddingBlockStart: React.CSSProperties['paddingBlockStart']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      paddingBlockStart,
    },
  }),
  extraLarge: (
    paddingBlockStart: React.CSSProperties['paddingBlockStart']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      paddingBlockStart,
    },
  }),
  extraExtraLarge: (
    paddingBlockStart: React.CSSProperties['paddingBlockStart']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      paddingBlockStart,
    },
  }),
});

const paddingBlockEndStyles = stylex.create({
  default: (paddingBlockEnd: React.CSSProperties['paddingBlockEnd']) => ({
    paddingBlockEnd,
  }),
  small: (paddingBlockEnd: React.CSSProperties['paddingBlockEnd']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      paddingBlockEnd,
    },
  }),
  medium: (paddingBlockEnd: React.CSSProperties['paddingBlockEnd']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      paddingBlockEnd,
    },
  }),
  large: (paddingBlockEnd: React.CSSProperties['paddingBlockEnd']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      paddingBlockEnd,
    },
  }),
  extraLarge: (paddingBlockEnd: React.CSSProperties['paddingBlockEnd']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      paddingBlockEnd,
    },
  }),
  extraExtraLarge: (
    paddingBlockEnd: React.CSSProperties['paddingBlockEnd']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      paddingBlockEnd,
    },
  }),
});

const paddingInlineStartStyles = stylex.create({
  default: (paddingInlineStart: React.CSSProperties['paddingInlineStart']) => ({
    paddingInlineStart,
  }),
  small: (paddingInlineStart: React.CSSProperties['paddingInlineStart']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      paddingInlineStart,
    },
  }),
  medium: (paddingInlineStart: React.CSSProperties['paddingInlineStart']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      paddingInlineStart,
    },
  }),
  large: (paddingInlineStart: React.CSSProperties['paddingInlineStart']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      paddingInlineStart,
    },
  }),
  extraLarge: (
    paddingInlineStart: React.CSSProperties['paddingInlineStart']
  ) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      paddingInlineStart,
    },
  }),
  extraExtraLarge: (
    paddingInlineStart: React.CSSProperties['paddingInlineStart']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      paddingInlineStart,
    },
  }),
});

const paddingInlineEndStyles = stylex.create({
  default: (paddingInlineEnd: React.CSSProperties['paddingInlineEnd']) => ({
    paddingInlineEnd,
  }),
  small: (paddingInlineEnd: React.CSSProperties['paddingInlineEnd']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      paddingInlineEnd,
    },
  }),
  medium: (paddingInlineEnd: React.CSSProperties['paddingInlineEnd']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      paddingInlineEnd,
    },
  }),
  large: (paddingInlineEnd: React.CSSProperties['paddingInlineEnd']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      paddingInlineEnd,
    },
  }),
  extraLarge: (paddingInlineEnd: React.CSSProperties['paddingInlineEnd']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      paddingInlineEnd,
    },
  }),
  extraExtraLarge: (
    paddingInlineEnd: React.CSSProperties['paddingInlineEnd']
  ) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      paddingInlineEnd,
    },
  }),
});

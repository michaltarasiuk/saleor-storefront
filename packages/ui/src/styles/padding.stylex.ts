import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedMediaQueryStyle,
  normalizeMediaQueryStyle,
} from '../utils/media-query';
import {spacing} from '../variables/tokens.stylex';

export type Padding =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export function getPaddingStyles(padding: MaybeShorthandProperty<Padding>) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizePadding(padding);
  return [
    paddingBlockStartStyles.base(
      normalizeMediaQueryStyle({
        default: getPaddingToken(blockStart),
      })
    ),
    paddingInlineEndStyles.base(
      normalizeMediaQueryStyle({
        default: getPaddingToken(inlineEnd),
      })
    ),
    paddingBlockEndStyles.base(
      normalizeMediaQueryStyle({
        default: getPaddingToken(blockEnd),
      })
    ),
    paddingInlineStartStyles.base(
      normalizeMediaQueryStyle({
        default: getPaddingToken(inlineStart),
      })
    ),
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

function getPaddingToken(padding: Padding) {
  switch (padding) {
    case 'none':
      return spacing.none;
    case 'extraTight':
      return spacing.small300;
    case 'tight':
      return spacing.small200;
    case 'base':
      return spacing.base;
    case 'loose':
      return spacing.large200;
    case 'extraLoose':
      return spacing.large500;
    default:
      assertNever(padding);
  }
}

const paddingBlockStartStyles = stylex.create({
  base: (
    paddingBlockStart: NormalizedMediaQueryStyle<
      React.CSSProperties['paddingBlockStart']
    >
  ) => ({
    paddingBlockStart: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        paddingBlockStart.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        paddingBlockStart.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        paddingBlockStart.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        paddingBlockStart.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        paddingBlockStart.extraExtraLarge,
    },
  }),
});

const paddingBlockEndStyles = stylex.create({
  base: (
    paddingBlockEnd: NormalizedMediaQueryStyle<
      React.CSSProperties['paddingBlockEnd']
    >
  ) => ({
    paddingBlockEnd: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        paddingBlockEnd.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        paddingBlockEnd.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        paddingBlockEnd.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        paddingBlockEnd.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        paddingBlockEnd.extraExtraLarge,
    },
  }),
});

const paddingInlineStartStyles = stylex.create({
  base: (
    paddingInlineStart: NormalizedMediaQueryStyle<
      React.CSSProperties['paddingInlineStart']
    >
  ) => ({
    paddingInlineStart: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        paddingInlineStart.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        paddingInlineStart.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        paddingInlineStart.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        paddingInlineStart.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        paddingInlineStart.extraExtraLarge,
    },
  }),
});

const paddingInlineEndStyles = stylex.create({
  base: (
    paddingInlineEnd: NormalizedMediaQueryStyle<
      React.CSSProperties['paddingInlineEnd']
    >
  ) => ({
    paddingInlineEnd: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        paddingInlineEnd.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        paddingInlineEnd.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        paddingInlineEnd.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        paddingInlineEnd.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        paddingInlineEnd.extraExtraLarge,
    },
  }),
});

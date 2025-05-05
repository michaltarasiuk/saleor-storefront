import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from '../consts/responsive';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';
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
      normalizeResponsiveStyle({
        default: getPaddingToken(blockStart),
      })
    ),
    paddingInlineEndStyles.base(
      normalizeResponsiveStyle({
        default: getPaddingToken(inlineEnd),
      })
    ),
    paddingBlockEndStyles.base(
      normalizeResponsiveStyle({
        default: getPaddingToken(blockEnd),
      })
    ),
    paddingInlineStartStyles.base(
      normalizeResponsiveStyle({
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
    paddingBlockStart: NormalizedResponsiveStyle<
      React.CSSProperties['paddingBlockStart']
    >
  ) => ({
    paddingBlockStart: {
      default: paddingBlockStart.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        paddingBlockStart.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        paddingBlockStart.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        paddingBlockStart.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        paddingBlockStart.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        paddingBlockStart.extraExtraLarge,
    },
  }),
});

const paddingBlockEndStyles = stylex.create({
  base: (
    paddingBlockEnd: NormalizedResponsiveStyle<
      React.CSSProperties['paddingBlockEnd']
    >
  ) => ({
    paddingBlockEnd: {
      default: paddingBlockEnd.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        paddingBlockEnd.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        paddingBlockEnd.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        paddingBlockEnd.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        paddingBlockEnd.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        paddingBlockEnd.extraExtraLarge,
    },
  }),
});

const paddingInlineStartStyles = stylex.create({
  base: (
    paddingInlineStart: NormalizedResponsiveStyle<
      React.CSSProperties['paddingInlineStart']
    >
  ) => ({
    paddingInlineStart: {
      default: paddingInlineStart.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        paddingInlineStart.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        paddingInlineStart.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        paddingInlineStart.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        paddingInlineStart.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        paddingInlineStart.extraExtraLarge,
    },
  }),
});

const paddingInlineEndStyles = stylex.create({
  base: (
    paddingInlineEnd: NormalizedResponsiveStyle<
      React.CSSProperties['paddingInlineEnd']
    >
  ) => ({
    paddingInlineEnd: {
      default: paddingInlineEnd.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        paddingInlineEnd.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        paddingInlineEnd.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        paddingInlineEnd.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        paddingInlineEnd.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        paddingInlineEnd.extraExtraLarge,
    },
  }),
});

import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import type {MaybeShorthandProperty} from '../types/shorthand';
import {spacing} from '../variables/tokens.stylex';

export type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export function getSpacingStyles(spacing: MaybeShorthandProperty<Spacing>) {
  const [rowSpacing, columnSpacing] = normalizeSpacing(spacing);
  return [
    spacingRowStyles.default(getSpacingToken(rowSpacing)),
    spacingColumnStyles.default(getSpacingToken(columnSpacing)),
  ];
}

function normalizeSpacing(spacing: MaybeShorthandProperty<Spacing>) {
  return !isArray(spacing) ? [spacing, spacing] : spacing;
}

export function getSpacingToken(spacingKey: Spacing) {
  switch (spacingKey) {
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
      assertNever(spacingKey);
  }
}

const spacingRowStyles = stylex.create({
  default: (rowGap: React.CSSProperties['rowGap']) => ({
    rowGap,
  }),
  small: (rowGap: React.CSSProperties['rowGap']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      rowGap,
    },
  }),
  medium: (rowGap: React.CSSProperties['rowGap']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      rowGap,
    },
  }),
  large: (rowGap: React.CSSProperties['rowGap']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      rowGap,
    },
  }),
  extraLarge: (rowGap: React.CSSProperties['rowGap']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      rowGap,
    },
  }),
  extraExtraLarge: (rowGap: React.CSSProperties['rowGap']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      rowGap,
    },
  }),
});

const spacingColumnStyles = stylex.create({
  default: (columnGap: React.CSSProperties['columnGap']) => ({
    columnGap,
  }),
  small: (columnGap: React.CSSProperties['columnGap']) => ({
    ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]: {
      columnGap,
    },
  }),
  medium: (columnGap: React.CSSProperties['columnGap']) => ({
    ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]: {
      columnGap,
    },
  }),
  large: (columnGap: React.CSSProperties['columnGap']) => ({
    ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]: {
      columnGap,
    },
  }),
  extraLarge: (columnGap: React.CSSProperties['columnGap']) => ({
    ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]: {
      columnGap,
    },
  }),
  extraExtraLarge: (columnGap: React.CSSProperties['columnGap']) => ({
    ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]: {
      columnGap,
    },
  }),
});

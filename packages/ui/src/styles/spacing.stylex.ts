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
    spacingRowStyles.base(
      normalizeMediaQueryStyle({
        default: getSpacingToken(rowSpacing),
      })
    ),
    spacingColumnStyles.base(
      normalizeMediaQueryStyle({
        default: getSpacingToken(columnSpacing),
      })
    ),
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
  base: (rowGap: NormalizedMediaQueryStyle<React.CSSProperties['rowGap']>) => ({
    rowGap: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        rowGap.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        rowGap.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        rowGap.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        rowGap.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        rowGap.extraExtraLarge,
    },
  }),
});

const spacingColumnStyles = stylex.create({
  base: (
    columnGap: NormalizedMediaQueryStyle<React.CSSProperties['columnGap']>
  ) => ({
    columnGap: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        columnGap.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        columnGap.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        columnGap.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        columnGap.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        columnGap.extraExtraLarge,
    },
  }),
});

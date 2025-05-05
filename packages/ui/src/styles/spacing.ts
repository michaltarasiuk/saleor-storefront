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
      normalizeResponsiveStyle({
        default: getSpacingToken(rowSpacing),
      })
    ),
    spacingColumnStyles.base(
      normalizeResponsiveStyle({
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
  base: (rowGap: NormalizedResponsiveStyle<React.CSSProperties['rowGap']>) => ({
    rowGap: {
      default: rowGap.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        rowGap.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        rowGap.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        rowGap.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        rowGap.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        rowGap.extraExtraLarge,
    },
  }),
});

const spacingColumnStyles = stylex.create({
  base: (
    columnGap: NormalizedResponsiveStyle<React.CSSProperties['columnGap']>
  ) => ({
    columnGap: {
      default: columnGap.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        columnGap.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        columnGap.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        columnGap.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        columnGap.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        columnGap.extraExtraLarge,
    },
  }),
});

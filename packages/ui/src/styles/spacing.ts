import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MaybeShorthandProperty} from '../types/shorthand';
import {spacing} from '../variables/tokens.stylex';

type RowSpacing = keyof typeof spacingRowStyles;
type ColumnSpacing = keyof typeof spacingColumnStyles;

export type Spacing = MaybeShorthandProperty<RowSpacing & ColumnSpacing>;

export function getSpacingStyles(spacing: Spacing) {
  const [rowSpacing, columnSpacing] = normalizeSpacing(spacing);
  return [spacingRowStyles[rowSpacing], spacingColumnStyles[columnSpacing]];
}

function normalizeSpacing(spacing: Spacing) {
  return !isArray(spacing) ? [spacing, spacing] : spacing;
}

const spacingRowStyles = stylex.create({
  none: {
    rowGap: null,
  },
  extraTight: {
    rowGap: spacing.small400,
  },
  tight: {
    rowGap: spacing.small200,
  },
  base: {
    rowGap: spacing.base,
  },
  loose: {
    rowGap: spacing.large200,
  },
  extraLoose: {
    rowGap: spacing.large500,
  },
});

const spacingColumnStyles = stylex.create({
  none: {
    columnGap: null,
  },
  extraTight: {
    columnGap: spacing.small400,
  },
  tight: {
    columnGap: spacing.small200,
  },
  base: {
    columnGap: spacing.base,
  },
  loose: {
    columnGap: spacing.large200,
  },
  extraLoose: {
    columnGap: spacing.large500,
  },
});

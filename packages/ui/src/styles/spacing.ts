import * as stylex from '@stylexjs/stylex';

import {spacing} from '../variables/tokens.stylex';

export const spacingRowStyles = stylex.create({
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
    rowGap: spacing.large300,
  },
  extraLoose: {
    rowGap: spacing.large500,
  },
});

export const spacingColumnStyles = stylex.create({
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
    columnGap: spacing.large300,
  },
  extraLoose: {
    columnGap: spacing.large500,
  },
});

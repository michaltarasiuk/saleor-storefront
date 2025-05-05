import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from '../consts/responsive';
import {
  formatGridItemSizes,
  type GridItemSize,
} from '../utils/format-grid-item-size';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';

export type Rows = GridItemSize[] | GridItemSize;

export function getRowsStyles(rows: Rows) {
  return rowsStyles.base(
    normalizeResponsiveStyle({
      default: formatGridItemSizes(rows),
    })
  );
}

const rowsStyles = stylex.create({
  base: (
    gridTemplateRows: NormalizedResponsiveStyle<
      React.CSSProperties['gridTemplateRows']
    >
  ) => ({
    gridTemplateRows: {
      default: gridTemplateRows.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        gridTemplateRows.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        gridTemplateRows.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        gridTemplateRows.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        gridTemplateRows.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        gridTemplateRows.extraExtraLarge,
    },
  }),
});

import {toArray} from '@repo/utils/to-array';
import * as stylex from '@stylexjs/stylex';

import type {ViewportInlineSizes} from '../consts/responsive';
import {
  formatGridItemSize,
  type GridItemSize,
} from '../utils/format-grid-item-size';
import {
  type NormalizedResponsiveStyle,
  normalizeResponsiveStyle,
} from '../utils/responsive';

export type Columns = GridItemSize[] | GridItemSize;

export function getColumnsStyles(columns: Columns) {
  return columnsStyles.base(
    normalizeResponsiveStyle({
      default: toArray(columns).map(formatGridItemSize).join(' '),
    })
  );
}

const columnsStyles = stylex.create({
  base: (
    gridTemplateColumns: NormalizedResponsiveStyle<
      React.CSSProperties['gridTemplateColumns']
    >
  ) => ({
    gridTemplateColumns: {
      default: gridTemplateColumns.default,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        gridTemplateColumns.small,
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        gridTemplateColumns.medium,
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        gridTemplateColumns.large,
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        gridTemplateColumns.extraLarge,
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        gridTemplateColumns.extraExtraLarge,
    },
  }),
});

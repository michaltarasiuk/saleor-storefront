import * as stylex from '@stylexjs/stylex';

import type {MediaQuerySizes} from '../consts/media-query';
import {
  formatGridItemSizes,
  type GridItemSize,
} from '../utils/format-grid-item-size';
import {
  type NormalizedMediaQueryStyle,
  normalizeMediaQueryStyle,
} from '../utils/media-query';

export type Rows = GridItemSize[] | GridItemSize;

export function getRowsStyles(rows: Rows) {
  return rowsStyles.base(
    normalizeMediaQueryStyle({
      default: formatGridItemSizes(rows),
    })
  );
}

const rowsStyles = stylex.create({
  base: (
    gridTemplateRows: NormalizedMediaQueryStyle<
      React.CSSProperties['gridTemplateRows']
    >
  ) => ({
    gridTemplateRows: {
      default: gridTemplateRows.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        gridTemplateRows.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        gridTemplateRows.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        gridTemplateRows.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        gridTemplateRows.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        gridTemplateRows.extraExtraLarge,
    },
  }),
});

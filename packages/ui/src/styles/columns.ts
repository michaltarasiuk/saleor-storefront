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

export type Columns = GridItemSize[] | GridItemSize;

export function getColumnsStyles(columns: Columns) {
  return columnsStyles.base(
    normalizeMediaQueryStyle({
      default: formatGridItemSizes(columns),
    })
  );
}

const columnsStyles = stylex.create({
  base: (
    gridTemplateColumns: NormalizedMediaQueryStyle<
      React.CSSProperties['gridTemplateColumns']
    >
  ) => ({
    gridTemplateColumns: {
      default: gridTemplateColumns.default,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['small']]:
        gridTemplateColumns.small,
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        gridTemplateColumns.medium,
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['large']]:
        gridTemplateColumns.large,
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['extraLarge']]:
        gridTemplateColumns.extraLarge,
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['extraExtraLarge']]:
        gridTemplateColumns.extraExtraLarge,
    },
  }),
});

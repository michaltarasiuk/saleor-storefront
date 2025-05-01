import {assertNever} from '@repo/utils/assert-never';
import type {Property} from 'csstype';

export type GridItemSize =
  | 'auto'
  | 'fill'
  | number
  | `${number}fr`
  | `${number}%`;

export function formatGridItemSize(gridItemSize: GridItemSize) {
  let formatedGridItemSize:
    | Property.GridTemplateColumns
    | Property.GridTemplateRows;
  switch (typeof gridItemSize) {
    case 'string':
      formatedGridItemSize = gridItemSize === 'fill' ? '1fr' : gridItemSize;
      break;
    case 'number':
      formatedGridItemSize = gridItemSize + 'px';
      break;
    default:
      assertNever(gridItemSize);
  }
  return formatedGridItemSize;
}

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
  if (typeof gridItemSize === 'number') {
    formatedGridItemSize = gridItemSize + 'px';
  } else if (gridItemSize === 'fill') {
    formatedGridItemSize = '1fr';
  } else {
    formatedGridItemSize = gridItemSize;
  }
  return formatedGridItemSize;
}

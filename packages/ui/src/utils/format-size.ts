import type {Property} from 'csstype';

export type Size = number | `${number}%` | 'fill';

export function formatSize(size: Size) {
  let formattedSize: Property.InlineSize | Property.BlockSize;
  if (typeof size === 'number') {
    formattedSize = size + 'px';
  } else if (size === 'fill') {
    formattedSize = '100%';
  } else {
    formattedSize = size;
  }
  return formattedSize;
}

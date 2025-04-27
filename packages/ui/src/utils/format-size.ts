import {assertNever} from '@repo/utils/assert-never';
import type {Property} from 'csstype';

export type Size = number | `${number}%` | 'fill';

export function formatSize(size: Size) {
  let formattedSize: Property.InlineSize | Property.BlockSize;
  switch (typeof size) {
    case 'string':
      formattedSize = size === 'fill' ? '100%' : size;
      break;
    case 'number':
      formattedSize = size + 'px';
      break;
    default:
      assertNever(size);
  }
  return formattedSize;
}

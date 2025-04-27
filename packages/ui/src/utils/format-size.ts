import type {CSSProperties} from 'react';

export type Size = number | `${number}%` | 'fill';

export function formatSize(
  size: Size
): CSSProperties['blockSize' | 'inlineSize'] {
  return size === 'fill' ? '100%' : size;
}

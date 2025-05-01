import * as stylex from '@stylexjs/stylex';

import {formatSize, type Size} from '../utils/format-size';

export interface SizeProps {
  readonly minInlineSize?: Size;
  readonly maxInlineSize?: Size;
  readonly minBlockSize?: Size;
  readonly maxBlockSize?: Size;
}

export function getSizeStyles({
  minInlineSize,
  maxInlineSize,
  minBlockSize,
  maxBlockSize,
}: SizeProps) {
  return sizeStyles.base(
    minInlineSize && formatSize(minInlineSize),
    maxInlineSize && formatSize(maxInlineSize),
    minBlockSize && formatSize(minBlockSize),
    maxBlockSize && formatSize(maxBlockSize)
  );
}

const sizeStyles = stylex.create({
  base: (
    minInlineSize?: React.CSSProperties['minInlineSize'],
    maxInlineSize?: React.CSSProperties['maxInlineSize'],
    minBlockSize?: React.CSSProperties['minBlockSize'],
    maxBlockSize?: React.CSSProperties['maxBlockSize']
  ) => ({
    minInlineSize,
    maxInlineSize,
    minBlockSize,
    maxBlockSize,
  }),
});

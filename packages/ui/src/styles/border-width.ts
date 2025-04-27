import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import {borderWidth} from '../variables/tokens.stylex';

type BorderBlockStartWidth = keyof typeof borderBlockStartWidthStyles;
type BorderBlockEndWidth = keyof typeof borderBlockEndWidthStyles;
type BorderInlineStartWidth = keyof typeof borderInlineStartWidthStyles;
type BorderInlineEndWidth = keyof typeof borderInlineEndWidthStyles;

type BorderBlockWidth = BorderBlockStartWidth & BorderBlockEndWidth;
type BorderInlineWidth = BorderInlineStartWidth & BorderInlineEndWidth;

export type BorderWidth =
  | (BorderBlockWidth & BorderInlineWidth)
  | readonly [BorderBlockWidth, BorderInlineWidth]
  | readonly [
      BorderBlockStartWidth,
      BorderBlockEndWidth,
      BorderInlineStartWidth,
      BorderInlineEndWidth,
    ];

export function normalizeBorderWidth(borderWidth: BorderWidth) {
  if (!isArray(borderWidth)) {
    return [borderWidth, borderWidth, borderWidth, borderWidth];
  }
  switch (borderWidth.length) {
    case 2:
      return [
        borderWidth[0],
        borderWidth[1],
        borderWidth[0],
        borderWidth[1],
      ] as const;
    case 4:
      return [
        borderWidth[0],
        borderWidth[1],
        borderWidth[2],
        borderWidth[3],
      ] as const;
    default:
      assertNever(borderWidth);
  }
}

export const borderBlockStartWidthStyles = stylex.create({
  base: {
    borderBlockStartWidth: borderWidth.base,
  },
  medium: {
    borderBlockStartWidth: borderWidth.medium,
  },
  thick: {
    borderBlockStartWidth: borderWidth.thick,
  },
});

export const borderBlockEndWidthStyles = stylex.create({
  base: {
    borderBlockEndWidth: borderWidth.base,
  },
  medium: {
    borderBlockEndWidth: borderWidth.medium,
  },
  thick: {
    borderBlockEndWidth: borderWidth.thick,
  },
});

export const borderInlineStartWidthStyles = stylex.create({
  base: {
    borderInlineStartWidth: borderWidth.base,
  },
  medium: {
    borderInlineStartWidth: borderWidth.medium,
  },
  thick: {
    borderInlineStartWidth: borderWidth.thick,
  },
});

export const borderInlineEndWidthStyles = stylex.create({
  base: {
    borderInlineEndWidth: borderWidth.base,
  },
  medium: {
    borderInlineEndWidth: borderWidth.medium,
  },
  thick: {
    borderInlineEndWidth: borderWidth.thick,
  },
});

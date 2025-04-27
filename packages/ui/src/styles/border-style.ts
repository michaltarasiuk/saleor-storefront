import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MaybeShorthandProperty} from '../types/shorthand';

type BorderBlockStartStyle = keyof typeof borderBlockStartStyleStyles;
type BorderBlockEndStyle = keyof typeof borderBlockEndStyleStyles;
type BorderInlineStartStyle = keyof typeof borderInlineStartStyleStyles;
type BorderInlineEndStyle = keyof typeof borderInlineEndStyleStyles;

type BorderBlockStyle = BorderBlockStartStyle & BorderBlockEndStyle;
type BorderInlineStyle = BorderInlineStartStyle & BorderInlineEndStyle;

export type BorderStyle = MaybeShorthandProperty<
  BorderBlockStyle & BorderInlineStyle
>;

export function getBorderStyleStyles(borderStyle: BorderStyle) {
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizeBorderStyle(borderStyle);
  return [
    borderBlockStartStyleStyles[blockStart],
    borderInlineEndStyleStyles[inlineEnd],
    borderBlockEndStyleStyles[blockEnd],
    borderInlineStartStyleStyles[inlineStart],
  ];
}

function normalizeBorderStyle(borderStyle: BorderStyle) {
  if (!isArray(borderStyle)) {
    return [borderStyle, borderStyle, borderStyle, borderStyle];
  }
  switch (borderStyle.length) {
    case 2:
      return [
        borderStyle[1],
        borderStyle[0],
        borderStyle[1],
        borderStyle[0],
      ] as const;
    case 4:
      return borderStyle;
    default:
      assertNever(borderStyle);
  }
}

const borderBlockStartStyleStyles = stylex.create({
  base: {
    borderBlockStartStyle: 'solid',
  },
  dashed: {
    borderBlockStartStyle: 'dashed',
  },
  dotted: {
    borderBlockStartStyle: 'dotted',
  },
  none: {
    borderBlockStartStyle: 'none',
  },
});

const borderBlockEndStyleStyles = stylex.create({
  base: {
    borderBlockEndStyle: 'solid',
  },
  dashed: {
    borderBlockEndStyle: 'dashed',
  },
  dotted: {
    borderBlockEndStyle: 'dotted',
  },
  none: {
    borderBlockEndStyle: 'none',
  },
});

const borderInlineStartStyleStyles = stylex.create({
  base: {
    borderInlineStartStyle: 'solid',
  },
  dashed: {
    borderInlineStartStyle: 'dashed',
  },
  dotted: {
    borderInlineStartStyle: 'dotted',
  },
  none: {
    borderInlineStartStyle: 'none',
  },
});

const borderInlineEndStyleStyles = stylex.create({
  base: {
    borderInlineEndStyle: 'solid',
  },
  dashed: {
    borderInlineEndStyle: 'dashed',
  },
  dotted: {
    borderInlineEndStyle: 'dotted',
  },
  none: {
    borderInlineEndStyle: 'none',
  },
});

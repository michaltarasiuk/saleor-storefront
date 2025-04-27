import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

type BorderBlockStartStyle = keyof typeof borderBlockStartStyleStyles;
type BorderBlockEndStyle = keyof typeof borderBlockEndStyleStyles;
type BorderInlineStartStyle = keyof typeof borderInlineStartStyleStyles;
type BorderInlineEndStyle = keyof typeof borderInlineEndStyleStyles;

type BorderBlockStyle = BorderBlockStartStyle & BorderBlockEndStyle;
type BorderInlineStyle = BorderInlineStartStyle & BorderInlineEndStyle;

export type BorderStyle =
  | (BorderBlockStyle & BorderInlineStyle)
  | readonly [BorderBlockStyle, BorderInlineStyle]
  | readonly [
      BorderBlockStartStyle,
      BorderBlockEndStyle,
      BorderInlineStartStyle,
      BorderInlineEndStyle,
    ];

export function getBorderStyleStyles(borderStyle: BorderStyle) {
  const [
    borderBlockStartStyle,
    borderBlockEndStyle,
    borderInlineStartStyle,
    borderInlineEndStyle,
  ] = normalizeBorderStyle(borderStyle);
  return [
    borderBlockStartStyleStyles[borderBlockStartStyle],
    borderBlockEndStyleStyles[borderBlockEndStyle],
    borderInlineStartStyleStyles[borderInlineStartStyle],
    borderInlineEndStyleStyles[borderInlineEndStyle],
  ];
}

function normalizeBorderStyle(borderStyle: BorderStyle) {
  if (!isArray(borderStyle)) {
    return [borderStyle, borderStyle, borderStyle, borderStyle];
  }
  switch (borderStyle.length) {
    case 2:
      return [
        borderStyle[0],
        borderStyle[1],
        borderStyle[0],
        borderStyle[1],
      ] as const;
    case 4:
      return [
        borderStyle[0],
        borderStyle[1],
        borderStyle[2],
        borderStyle[3],
      ] as const;
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

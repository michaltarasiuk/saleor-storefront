import {assertNever} from '@repo/utils/assert-never';
import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import type {MaybeShorthandProperty} from '../types/shorthand';
import {spacing} from '../variables/tokens.stylex';

type PaddingBlockStart = keyof typeof paddingBlockStartStyles;
type PaddingBlockEnd = keyof typeof paddingBlockEndStyles;
type PaddingInlineStart = keyof typeof paddingInlineStartStyles;
type PaddingInlineEnd = keyof typeof paddingInlineEndStyles;

type PaddingBlock = PaddingBlockStart & PaddingBlockEnd;
type PaddingInline = PaddingInlineStart & PaddingInlineEnd;

export type Padding = MaybeShorthandProperty<PaddingBlock & PaddingInline>;

export function getPaddingStyles(padding: Padding) {
  const [
    paddingBlockStart,
    paddingBlockEnd,
    paddingInlineStart,
    paddingInlineEnd,
  ] = normalizePadding(padding);
  return [
    paddingBlockStartStyles[paddingBlockStart],
    paddingBlockEndStyles[paddingBlockEnd],
    paddingInlineStartStyles[paddingInlineStart],
    paddingInlineEndStyles[paddingInlineEnd],
  ];
}

function normalizePadding(padding: Padding) {
  if (!isArray(padding)) {
    return [padding, padding, padding, padding];
  }
  switch (padding.length) {
    case 2:
      return [padding[0], padding[1], padding[0], padding[1]] as const;
    case 4:
      return padding;
    default:
      assertNever(padding);
  }
}

const paddingBlockStartStyles = stylex.create({
  none: {
    paddingBlockStart: null,
  },
  extraTight: {
    paddingBlockStart: spacing.small400,
  },
  tight: {
    paddingBlockStart: spacing.small200,
  },
  base: {
    paddingBlockStart: spacing.base,
  },
  loose: {
    paddingBlockStart: spacing.large300,
  },
  extraLoose: {
    paddingBlockStart: spacing.large500,
  },
});

const paddingBlockEndStyles = stylex.create({
  none: {
    paddingBlockEnd: null,
  },
  extraTight: {
    paddingBlockEnd: spacing.small400,
  },
  tight: {
    paddingBlockEnd: spacing.small200,
  },
  base: {
    paddingBlockEnd: spacing.base,
  },
  loose: {
    paddingBlockEnd: spacing.large300,
  },
  extraLoose: {
    paddingBlockEnd: spacing.large500,
  },
});

const paddingInlineStartStyles = stylex.create({
  none: {
    paddingInlineStart: null,
  },
  extraTight: {
    paddingInlineStart: spacing.small400,
  },
  tight: {
    paddingInlineStart: spacing.small200,
  },
  base: {
    paddingInlineStart: spacing.base,
  },
  loose: {
    paddingInlineStart: spacing.large300,
  },
  extraLoose: {
    paddingInlineStart: spacing.large500,
  },
});

const paddingInlineEndStyles = stylex.create({
  none: {
    paddingInlineEnd: null,
  },
  extraTight: {
    paddingInlineEnd: spacing.small400,
  },
  tight: {
    paddingInlineEnd: spacing.small200,
  },
  base: {
    paddingInlineEnd: spacing.base,
  },
  loose: {
    paddingInlineEnd: spacing.large300,
  },
  extraLoose: {
    paddingInlineEnd: spacing.large500,
  },
});

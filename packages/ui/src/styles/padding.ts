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
  const [blockStart, inlineEnd, blockEnd, inlineStart] =
    normalizePadding(padding);
  return [
    paddingBlockStartStyles[blockStart],
    paddingInlineEndStyles[inlineEnd],
    paddingBlockEndStyles[blockEnd],
    paddingInlineStartStyles[inlineStart],
  ];
}

function normalizePadding(padding: Padding) {
  if (!isArray(padding)) {
    return [padding, padding, padding, padding];
  }
  switch (padding.length) {
    case 2:
      return [padding[1], padding[0], padding[1], padding[0]] as const;
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
    paddingBlockStart: spacing.small300,
  },
  tight: {
    paddingBlockStart: spacing.small200,
  },
  base: {
    paddingBlockStart: spacing.base,
  },
  loose: {
    paddingBlockStart: spacing.large200,
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
    paddingBlockEnd: spacing.small300,
  },
  tight: {
    paddingBlockEnd: spacing.small200,
  },
  base: {
    paddingBlockEnd: spacing.base,
  },
  loose: {
    paddingBlockEnd: spacing.large200,
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
    paddingInlineStart: spacing.small300,
  },
  tight: {
    paddingInlineStart: spacing.small200,
  },
  base: {
    paddingInlineStart: spacing.base,
  },
  loose: {
    paddingInlineStart: spacing.large200,
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
    paddingInlineEnd: spacing.small300,
  },
  tight: {
    paddingInlineEnd: spacing.small200,
  },
  base: {
    paddingInlineEnd: spacing.base,
  },
  loose: {
    paddingInlineEnd: spacing.large200,
  },
  extraLoose: {
    paddingInlineEnd: spacing.large500,
  },
});

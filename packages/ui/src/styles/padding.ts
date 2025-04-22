import * as stylex from '@stylexjs/stylex';

import {spacing} from '../variables/tokens.stylex';

export const paddingBlockStartStyles = stylex.create({
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

export const paddingBlockEndStyles = stylex.create({
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

export const paddingInlineStartStyles = stylex.create({
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

export const paddingInlineEndStyles = stylex.create({
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

import * as stylex from '@stylexjs/stylex';

export type Direction = keyof typeof directionStyles;

export type BlockAlignment = keyof typeof blockAlignmentStyles;
export type InlineAlignment = keyof typeof inlineAlignmentStyles;

export const directionStyles = stylex.create({
  block: {
    flexDirection: 'column',
  },
  inline: {
    flexDirection: 'row',
  },
});

export const blockAlignmentStyles = stylex.create({
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  baseline: {
    alignItems: 'baseline',
  },
});

export const inlineAlignmentStyles = stylex.create({
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
});

import * as stylex from '@stylexjs/stylex';

import {spacing} from './variables/tokens.stylex';

interface InlineSpacerProps {
  readonly spacing?: keyof typeof spacingStyles;
}

export function InlineSpacer({spacing = 'base'}: InlineSpacerProps) {
  return <div {...stylex.props(styles.base, spacingStyles[spacing])} />;
}

const styles = stylex.create({
  base: {
    blockSize: '100%',
    flexShrink: 0,
  },
});

const spacingStyles = stylex.create({
  none: {
    inlineSize: null,
  },
  extraTight: {
    inlineSize: spacing.small400,
  },
  tight: {
    inlineSize: spacing.small200,
  },
  base: {
    inlineSize: spacing.base,
  },
  loose: {
    inlineSize: spacing.large300,
  },
  extraLoose: {
    inlineSize: spacing.large500,
  },
});

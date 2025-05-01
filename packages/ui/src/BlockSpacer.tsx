import * as stylex from '@stylexjs/stylex';

import {spacing} from './variables/tokens.stylex';

interface BlockSpacerProps {
  readonly spacing?: keyof typeof spacingStyles;
}

export function BlockSpacer({spacing = 'base'}: BlockSpacerProps) {
  return <div {...stylex.props(styles.base, spacingStyles[spacing])} />;
}

const styles = stylex.create({
  base: {
    inlineSize: '100%',
    flexShrink: 0,
  },
});

const spacingStyles = stylex.create({
  none: {
    blockSize: null,
  },
  extraTight: {
    blockSize: spacing.small300,
  },
  tight: {
    blockSize: spacing.small200,
  },
  base: {
    blockSize: spacing.base,
  },
  loose: {
    blockSize: spacing.large300,
  },
  extraLoose: {
    blockSize: spacing.large500,
  },
});

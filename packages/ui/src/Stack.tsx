import * as stylex from '@stylexjs/stylex';

import {inlineAlignmentStyles} from './styles/aligment';
import {blockAlignmentStyles} from './styles/aligment';
import {backgroundStyles} from './styles/background';
import type {BorderStyle} from './styles/border-style';
import {getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {getPaddingStyles, type Padding} from './styles/padding';
import {getSpacingStyles, type Spacing} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';

export function BlockStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="block" {...props} />;
}

export function InlineStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="inline" {...props} />;
}

interface StackProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly direction: keyof typeof directionStyles;
  readonly blockAligment?: keyof typeof blockAlignmentStyles;
  readonly inlineAligment?: keyof typeof inlineAlignmentStyles;
  readonly padding?: Padding;
  readonly spacing?: Spacing;
  readonly background?: keyof typeof backgroundStyles;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
}

function Stack({
  children,
  accessibilityLabel,
  accessibilityRole,
  direction,
  blockAligment = 'start',
  inlineAligment = 'start',
  spacing = 'none',
  padding = 'none',
  background = 'transparent',
  border = 'none',
  borderWidth = 'base',
}: StackProps) {
  return (
    <div
      aria-label={accessibilityLabel}
      role={accessibilityRole}
      {...stylex.props(
        styles.base,
        directionStyles[direction],
        blockAlignmentStyles[blockAligment],
        inlineAlignmentStyles[inlineAligment],
        backgroundStyles[background],
        ...getBorderStyleStyles(border),
        ...getBorderWidthStyles(borderWidth),
        ...getPaddingStyles(padding),
        ...getSpacingStyles(spacing)
      )}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
  },
});

const directionStyles = stylex.create({
  block: {
    flexDirection: 'column',
  },
  inline: {
    flexDirection: 'row',
  },
});

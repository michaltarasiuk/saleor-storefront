import * as stylex from '@stylexjs/stylex';

import {inlineAlignmentStyles} from './styles/aligment';
import {blockAlignmentStyles} from './styles/aligment';
import {backgroundStyles} from './styles/background';
import {
  borderBlockEndStyleStyles,
  borderBlockStartStyleStyles,
  borderInlineEndStyleStyles,
  borderInlineStartStyleStyles,
  type BorderStyle,
  normalizeBorderStyle,
} from './styles/border-style';
import {
  borderBlockEndWidthStyles,
  borderBlockStartWidthStyles,
  borderInlineEndWidthStyles,
  borderInlineStartWidthStyles,
  type BorderWidth,
  normalizeBorderWidth,
} from './styles/border-width';
import type {Padding} from './styles/padding';
import {
  normalizePadding,
  paddingBlockEndStyles,
  paddingBlockStartStyles,
  paddingInlineEndStyles,
  paddingInlineStartStyles,
} from './styles/padding';
import type {Spacing} from './styles/spacing';
import {
  normalizeSpacing,
  spacingColumnStyles,
  spacingRowStyles,
} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';

export function BlockStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="block" {...props} />;
}

export function InlineStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="inline" {...props} />;
}

interface StackProps {
  readonly children: React.ReactNode;
  readonly direction: keyof typeof directionStyles;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly background?: keyof typeof backgroundStyles;
  readonly blockAligment?: keyof typeof blockAlignmentStyles;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly inlineAligment?: keyof typeof inlineAlignmentStyles;
  readonly padding?: Padding;
  readonly spacing?: Spacing;
}

function Stack({
  children,
  direction,
  accessibilityLabel,
  accessibilityRole,
  background = 'transparent',
  blockAligment = 'start',
  border = 'none',
  borderWidth = 'base',
  inlineAligment = 'start',
  padding = 'none',
  spacing = 'none',
}: StackProps) {
  const [
    borderBlockStartStyle,
    borderBlockEndStyle,
    borderInlineStartStyle,
    borderInlineEndStyle,
  ] = normalizeBorderStyle(border);
  const [
    borderBlockStartWidth,
    borderBlockEndWidth,
    borderInlineStartWidth,
    borderInlineEndWidth,
  ] = normalizeBorderWidth(borderWidth);
  const [
    paddingInlineStart,
    paddingBlockStart,
    paddingInlineEnd,
    paddingBlockEnd,
  ] = normalizePadding(padding);
  const [rowSpacing, columnSpacing] = normalizeSpacing(spacing);

  return (
    <div
      aria-label={accessibilityLabel}
      role={accessibilityRole}
      {...stylex.props(
        styles.base,
        directionStyles[direction],
        backgroundStyles[background],
        blockAlignmentStyles[blockAligment],
        borderBlockStartStyleStyles[borderBlockStartStyle],
        borderBlockEndStyleStyles[borderBlockEndStyle],
        borderInlineStartStyleStyles[borderInlineStartStyle],
        borderInlineEndStyleStyles[borderInlineEndStyle],
        borderBlockStartWidthStyles[borderBlockStartWidth],
        borderBlockEndWidthStyles[borderBlockEndWidth],
        borderInlineStartWidthStyles[borderInlineStartWidth],
        borderInlineEndWidthStyles[borderInlineEndWidth],
        inlineAlignmentStyles[inlineAligment],
        paddingInlineStartStyles[paddingInlineStart],
        paddingBlockStartStyles[paddingBlockStart],
        paddingInlineEndStyles[paddingInlineEnd],
        paddingBlockEndStyles[paddingBlockEnd],
        spacingRowStyles[rowSpacing],
        spacingColumnStyles[columnSpacing]
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

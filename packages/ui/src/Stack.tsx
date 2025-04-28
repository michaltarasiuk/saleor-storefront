import * as stylex from '@stylexjs/stylex';

import type {
  BlockAlignment,
  Direction,
  InlineAlignment,
} from './styles/aligment';
import {directionStyles, inlineAlignmentStyles} from './styles/aligment';
import {blockAlignmentStyles} from './styles/aligment';
import type {Background} from './styles/background';
import {backgroundStyles} from './styles/background';
import type {BorderStyle} from './styles/border-style';
import {getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import {getPaddingStyles, type Padding} from './styles/padding';
import {getSpacingStyles, type Spacing} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import {baseColors} from './variables/colors.stylex';

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
  readonly direction: Direction;
  readonly blockAligment?: BlockAlignment;
  readonly inlineAligment?: InlineAlignment;
  readonly padding?: Padding;
  readonly spacing?: Spacing;
  readonly background?: Background;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly cornerRadius?: CornerRadius;
}

function Stack({
  children,
  accessibilityLabel,
  accessibilityRole,
  direction,
  blockAligment = 'stretch',
  inlineAligment = 'start',
  spacing = 'none',
  padding = 'none',
  background = 'transparent',
  border = 'none',
  borderWidth = 'base',
  cornerRadius = 'none',
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
        ...getPaddingStyles(padding),
        ...getSpacingStyles(spacing),
        ...getBorderStyleStyles(border),
        ...getBorderWidthStyles(borderWidth),
        ...getCornerRadiusStyles(cornerRadius)
      )}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
    borderColor: baseColors.border,
  },
});

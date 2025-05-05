import * as stylex from '@stylexjs/stylex';

import {
  type BlockAlignment,
  blockAlignmentStyles,
  type Direction,
  directionStyles,
  type InlineAlignment,
  inlineAlignmentStyles,
} from './styles/aligment';
import {type Background, backgroundStyles} from './styles/background';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import {getPaddingStyles, type Padding} from './styles/padding';
import {getSizeStyles, type SizeProps} from './styles/size';
import {getSpacingStyles, type Spacing} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import type {MaybeShorthandProperty} from './types/shorthand';
import {baseColors} from './variables/colors.stylex';

export function BlockStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="block" {...props} />;
}

export function InlineStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="inline" {...props} />;
}

interface StackProps extends SizeProps {
  readonly children: React.ReactNode;
  readonly direction: Direction;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly blockAligment?: BlockAlignment;
  readonly inlineAligment?: InlineAlignment;
  readonly padding?: MaybeShorthandProperty<Padding>;
  readonly spacing?: MaybeShorthandProperty<Spacing>;
  readonly background?: Background;
  readonly border?: MaybeShorthandProperty<BorderStyle>;
  readonly borderWidth?: MaybeShorthandProperty<BorderWidth>;
  readonly cornerRadius?: MaybeShorthandProperty<CornerRadius>;
}

function Stack({
  children,
  direction,
  accessibilityLabel,
  accessibilityRole,
  minBlockSize,
  maxBlockSize,
  minInlineSize,
  maxInlineSize,
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
      role={accessibilityRole}
      aria-label={accessibilityLabel}
      {...stylex.props(
        styles.base,
        directionStyles[direction],
        blockAlignmentStyles[blockAligment],
        inlineAlignmentStyles[inlineAligment],
        backgroundStyles[background],
        getSizeStyles({
          minBlockSize,
          maxBlockSize,
          minInlineSize,
          maxInlineSize,
        }),
        getPaddingStyles(padding),
        getSpacingStyles(spacing),
        getBorderStyleStyles(border),
        getBorderWidthStyles(borderWidth),
        getCornerRadiusStyles(cornerRadius)
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

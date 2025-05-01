'use client';

import * as stylex from '@stylexjs/stylex';
import {useVisuallyHidden} from 'react-aria';

import {
  type BlockAlignment,
  blockAlignmentStyles,
  type InlineAlignment,
  inlineAlignmentStyles,
} from './styles/aligment';
import {type Background, backgroundStyles} from './styles/background';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import {type Opacity, opacityStyles} from './styles/opacity';
import {type Overflow, overflowStyles} from './styles/overflow';
import {getPaddingStyles, type Padding} from './styles/padding';
import {getSizeStyles, type SizeProps} from './styles/size';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import type {Visibility} from './types/visibility';
import type {Size} from './utils/format-size';
import {baseColors} from './variables/colors.stylex';

interface ViewProps extends SizeProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly inlineSize?: Extract<Size, 'fill'>;
  readonly blockAlignment?: BlockAlignment;
  readonly inlineAlignment?: InlineAlignment;
  readonly padding?: Padding;
  readonly background?: Background;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly cornerRadius?: CornerRadius;
  readonly opacity?: Opacity;
  readonly overflow?: Overflow;
  readonly visibility?: Visibility;
}

export function View({
  children,
  accessibilityLabel,
  accessibilityRole,
  inlineSize,
  minBlockSize,
  maxBlockSize,
  minInlineSize,
  maxInlineSize,
  blockAlignment = 'start',
  inlineAlignment = 'start',
  padding = 'none',
  background = 'transparent',
  border = 'none',
  borderWidth = 'base',
  cornerRadius = 'none',
  opacity,
  overflow = 'visible',
  visibility,
}: ViewProps) {
  const {visuallyHiddenProps} = useVisuallyHidden();
  return (
    <div
      role={accessibilityRole}
      aria-label={accessibilityLabel}
      {...(visibility === 'hidden' && visuallyHiddenProps)}
      {...stylex.props(
        styles.base,
        backgroundStyles[background],
        blockAlignmentStyles[blockAlignment],
        inlineAlignmentStyles[inlineAlignment],
        overflowStyles[overflow],
        opacity && opacityStyles[opacity],
        styles.inlineSize(inlineSize),
        getSizeStyles({
          minBlockSize,
          maxBlockSize,
          minInlineSize,
          maxInlineSize,
        }),
        getPaddingStyles(padding),
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
    displayInside: 'flex',
    flexDirection: 'column',
    borderColor: baseColors.border,
  },
  inlineSize: (inlineSize: React.CSSProperties['inlineSize']) => ({
    inlineSize,
  }),
});

'use client';

import * as stylex from '@stylexjs/stylex';
import {useVisuallyHidden} from 'react-aria';

import type {BlockAlignment, InlineAlignment} from './styles/aligment';
import {blockAlignmentStyles, inlineAlignmentStyles} from './styles/aligment';
import type {Background} from './styles/background';
import {backgroundStyles} from './styles/background';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import type {Opacity} from './styles/opacity';
import {opacityStyles} from './styles/opacity';
import type {Overflow} from './styles/overflow';
import {overflowStyles} from './styles/overflow';
import {getPaddingStyles, type Padding} from './styles/padding';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import type {Visibility} from './types/visibility';
import {formatSize, type Size} from './utils/format-size';
import {baseColors} from './variables/colors.stylex';

interface ViewProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly inlineSize?: Extract<Size, 'fill'>;
  readonly maxBlockSize?: Size;
  readonly maxInlineSize?: Size;
  readonly minBlockSize?: Size;
  readonly minInlineSize?: Size;
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
  maxBlockSize,
  maxInlineSize,
  minBlockSize,
  minInlineSize,
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
      aria-label={accessibilityLabel}
      role={accessibilityRole}
      {...(visibility === 'hidden' && visuallyHiddenProps)}
      {...stylex.props(
        styles.base,
        backgroundStyles[background],
        blockAlignmentStyles[blockAlignment],
        inlineAlignmentStyles[inlineAlignment],
        overflowStyles[overflow],
        opacity && opacityStyles[opacity],
        styles.size(
          inlineSize && formatSize(inlineSize),
          maxBlockSize && formatSize(maxBlockSize),
          maxInlineSize && formatSize(maxInlineSize),
          minBlockSize && formatSize(minBlockSize),
          minInlineSize && formatSize(minInlineSize)
        ),
        ...getPaddingStyles(padding),
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
    displayInside: 'flex',
    flexDirection: 'column',
    borderColor: baseColors.border,
  },
  size: (
    inlineSize?: React.CSSProperties['inlineSize'],
    maxBlockSize?: React.CSSProperties['maxBlockSize'],
    maxInlineSize?: React.CSSProperties['maxInlineSize'],
    minBlockSize?: React.CSSProperties['minBlockSize'],
    minInlineSize?: React.CSSProperties['minInlineSize']
  ) => ({
    inlineSize,
    maxBlockSize,
    maxInlineSize,
    minBlockSize,
    minInlineSize,
  }),
});

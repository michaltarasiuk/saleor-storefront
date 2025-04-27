'use client';

import * as stylex from '@stylexjs/stylex';
import {useVisuallyHidden} from 'react-aria';

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
import {opacityStyles} from './styles/opacity';
import {overflowStyles} from './styles/overflow';
import {
  normalizePadding,
  type Padding,
  paddingBlockEndStyles,
  paddingBlockStartStyles,
  paddingInlineEndStyles,
  paddingInlineStartStyles,
} from './styles/padding';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import type {Visibility} from './types/visibility';
import {formatSize, type Size} from './utils/format-size';

interface ViewProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly background?: keyof typeof backgroundStyles;
  readonly blockAlignment?: keyof typeof blockAlignmentStyles;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly inlineAlignment?: keyof typeof inlineAlignmentStyles;
  readonly inlineSize?: Extract<Size, 'fill'>;
  readonly maxBlockSize?: Size;
  readonly maxInlineSize?: Size;
  readonly minBlockSize?: Size;
  readonly minInlineSize?: Size;
  readonly opacity?: keyof typeof opacityStyles;
  readonly overflow?: keyof typeof overflowStyles;
  readonly padding?: Padding;
  readonly visibility?: Visibility;
}

export function View({
  children,
  accessibilityLabel,
  accessibilityRole,
  background = 'transparent',
  blockAlignment = 'start',
  border = 'none',
  borderWidth = 'base',
  inlineAlignment = 'start',
  inlineSize,
  maxBlockSize,
  maxInlineSize,
  minBlockSize,
  minInlineSize,
  opacity,
  overflow = 'visible',
  padding = 'none',
  visibility,
}: ViewProps) {
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
  const {visuallyHiddenProps} = useVisuallyHidden();
  const [
    paddingInlineStart,
    paddingBlockStart,
    paddingInlineEnd,
    paddingBlockEnd,
  ] = normalizePadding(padding);
  return (
    <div
      aria-label={accessibilityLabel}
      role={accessibilityRole}
      {...(visibility === 'hidden' && visuallyHiddenProps)}
      {...stylex.props(
        styles.base,
        styles.size(
          inlineSize && formatSize(inlineSize),
          maxBlockSize && formatSize(maxBlockSize),
          maxInlineSize && formatSize(maxInlineSize),
          minBlockSize && formatSize(minBlockSize),
          minInlineSize && formatSize(minInlineSize)
        ),
        backgroundStyles[background],
        blockAlignmentStyles[blockAlignment],
        borderBlockStartStyleStyles[borderBlockStartStyle],
        borderBlockEndStyleStyles[borderBlockEndStyle],
        borderInlineStartStyleStyles[borderInlineStartStyle],
        borderInlineEndStyleStyles[borderInlineEndStyle],
        borderBlockStartWidthStyles[borderBlockStartWidth],
        borderBlockEndWidthStyles[borderBlockEndWidth],
        borderInlineStartWidthStyles[borderInlineStartWidth],
        borderInlineEndWidthStyles[borderInlineEndWidth],
        inlineAlignmentStyles[inlineAlignment],
        opacity && opacityStyles[opacity],
        overflowStyles[overflow],
        paddingInlineStartStyles[paddingInlineStart],
        paddingBlockStartStyles[paddingBlockStart],
        paddingInlineEndStyles[paddingInlineEnd],
        paddingBlockEndStyles[paddingBlockEnd]
      )}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  base: {
    displayInside: 'flex',
    flexDirection: 'column',
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

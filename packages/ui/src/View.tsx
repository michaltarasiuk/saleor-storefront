'use client';

import * as stylex from '@stylexjs/stylex';
import {useVisuallyHidden} from 'react-aria';

import {blockAlignmentStyles, inlineAlignmentStyles} from './styles/aligment';
import {backgroundStyles} from './styles/background';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {opacityStyles} from './styles/opacity';
import {overflowStyles} from './styles/overflow';
import {getPaddingStyles, type Padding} from './styles/padding';
import {type NonPresentationalAccessibilityRole} from './types/accessibility';
import {type Visibility} from './types/visibility';
import {formatSize, type Size} from './utils/format-size';

interface ViewProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly inlineSize?: Extract<Size, 'fill'>;
  readonly maxBlockSize?: Size;
  readonly maxInlineSize?: Size;
  readonly minBlockSize?: Size;
  readonly minInlineSize?: Size;
  readonly blockAlignment?: keyof typeof blockAlignmentStyles;
  readonly inlineAlignment?: keyof typeof inlineAlignmentStyles;
  readonly padding?: Padding;
  readonly background?: keyof typeof backgroundStyles;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly opacity?: keyof typeof opacityStyles;
  readonly overflow?: keyof typeof overflowStyles;
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
        ...getBorderStyleStyles(border),
        ...getBorderWidthStyles(borderWidth),
        ...getPaddingStyles(padding)
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

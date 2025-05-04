import * as stylex from '@stylexjs/stylex';

import {type Background, backgroundStyles} from './styles/background';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type Columns, getColumnsStyles} from './styles/columns';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import {type Overflow, overflowStyles} from './styles/overflow';
import {getPaddingStyles, type Padding} from './styles/padding';
import {getRowsStyles, type Rows} from './styles/rows';
import {getSizeStyles, type SizeProps} from './styles/size';
import {getSpacingStyles, type Spacing} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import type {MaybeShorthandProperty} from './types/shorthand';

interface GridProps extends SizeProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly columns?: Columns;
  readonly rows?: Rows;
  readonly background?: Background;
  readonly border?: MaybeShorthandProperty<BorderStyle>;
  readonly borderWidth?: MaybeShorthandProperty<BorderWidth>;
  readonly cornerRadius?: MaybeShorthandProperty<CornerRadius>;
  readonly overflow?: Overflow;
  readonly padding?: MaybeShorthandProperty<Padding>;
  readonly spacing?: MaybeShorthandProperty<Spacing>;
}

export function Grid({
  children,
  accessibilityRole,
  accessibilityLabel,
  minBlockSize,
  maxBlockSize,
  minInlineSize,
  maxInlineSize,
  columns = 'fill',
  rows = 'fill',
  background = 'transparent',
  border = 'none',
  borderWidth = 'base',
  cornerRadius = 'none',
  overflow = 'visible',
  padding = 'none',
  spacing = 'none',
}: GridProps) {
  return (
    <div
      role={accessibilityRole}
      aria-label={accessibilityLabel}
      {...stylex.props(
        styles.base,
        backgroundStyles[background],
        overflowStyles[overflow],
        getColumnsStyles(columns),
        getRowsStyles(rows),
        getSizeStyles({
          minBlockSize,
          maxBlockSize,
          minInlineSize,
          maxInlineSize,
        }),
        getBorderStyleStyles(border),
        getBorderWidthStyles(borderWidth),
        getCornerRadiusStyles(cornerRadius),
        getPaddingStyles(padding),
        getSpacingStyles(spacing)
      )}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: 'grid',
  },
});

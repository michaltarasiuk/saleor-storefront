import {isArray} from '@repo/utils/is-array';
import * as stylex from '@stylexjs/stylex';

import {type Background, backgroundStyles} from './styles/background';
import {type BorderStyle, getBorderStyleStyles} from './styles/border-style';
import {type BorderWidth, getBorderWidthStyles} from './styles/border-width';
import {type CornerRadius, getCornerRadiusStyles} from './styles/corner-radius';
import {type Overflow, overflowStyles} from './styles/overflow';
import {getPaddingStyles, type Padding} from './styles/padding';
import {getSizeStyles, type SizeProps} from './styles/size';
import {getSpacingStyles, type Spacing} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import {
  formatGridItemSize,
  type GridItemSize,
} from './utils/format-grid-item-size';

type Columns = GridItemSize[] | GridItemSize;
type Rows = GridItemSize[] | GridItemSize;

interface GridProps extends SizeProps {
  readonly children: React.ReactNode;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly columns?: Columns;
  readonly rows?: Rows;
  readonly background?: Background;
  readonly border?: BorderStyle;
  readonly borderWidth?: BorderWidth;
  readonly cornerRadius?: CornerRadius;
  readonly overflow?: Overflow;
  readonly padding?: Padding;
  readonly spacing?: Spacing;
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
        styles.columns(
          isArray(columns)
            ? columns.map(formatGridItemSize).join(' ')
            : formatGridItemSize(columns)
        ),
        styles.rows(
          isArray(rows)
            ? rows.map(formatGridItemSize).join(' ')
            : formatGridItemSize(rows)
        ),
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
  none: {
    display: 'none',
  },
  columns: (
    gridTemplateColumns: React.CSSProperties['gridTemplateColumns']
  ) => ({
    gridTemplateColumns,
  }),
  rows: (gridTemplateRows: React.CSSProperties['gridTemplateRows']) => ({
    gridTemplateRows,
  }),
});

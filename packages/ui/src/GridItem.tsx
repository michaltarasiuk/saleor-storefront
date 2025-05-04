import * as stylex from '@stylexjs/stylex';

import {type Background, backgroundStyles} from './styles/background.stylex';
import {
  type BorderStyle,
  getBorderStyleStyles,
} from './styles/border-style.stylex';
import {
  type BorderWidth,
  getBorderWidthStyles,
} from './styles/border-width.stylex';
import {
  type CornerRadius,
  getCornerRadiusStyles,
} from './styles/corner-radius.stylex';
import {type Overflow, overflowStyles} from './styles/overflow.stylex';
import {getPaddingStyles, type Padding} from './styles/padding.stylex';
import {getSizeStyles, type SizeProps} from './styles/size.stylex';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';
import type {MaybeShorthandProperty} from './types/shorthand';

interface GridItemProps extends SizeProps {
  readonly children?: React.ReactNode;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly columnSpan?: number;
  readonly rowSpan?: number;
  readonly background?: Background;
  readonly border?: MaybeShorthandProperty<BorderStyle>;
  readonly borderWidth?: MaybeShorthandProperty<BorderWidth>;
  readonly cornerRadius?: MaybeShorthandProperty<CornerRadius>;
  readonly overflow?: Overflow;
  readonly padding?: MaybeShorthandProperty<Padding>;
}

export function GridItem({
  children,
  accessibilityRole,
  columnSpan,
  rowSpan,
  minBlockSize,
  maxBlockSize,
  minInlineSize,
  maxInlineSize,
  background = 'transparent',
  border = 'none',
  borderWidth = 'base',
  cornerRadius = 'none',
  overflow = 'visible',
  padding = 'none',
}: GridItemProps) {
  return (
    <div
      role={accessibilityRole}
      {...stylex.props(
        backgroundStyles[background],
        overflowStyles[overflow],
        !!columnSpan && styles.gridColumn(columnSpan),
        !!rowSpan && styles.gridRow(rowSpan),
        getSizeStyles({
          minBlockSize,
          maxBlockSize,
          minInlineSize,
          maxInlineSize,
        }),
        getBorderStyleStyles(border),
        getBorderWidthStyles(borderWidth),
        getCornerRadiusStyles(cornerRadius),
        getPaddingStyles(padding)
      )}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  gridColumn: (columnSpan: number) => ({
    gridColumn: `span ${columnSpan}`,
  }),
  gridRow: (rowSpan: number) => ({
    gridRow: `span ${rowSpan}`,
  }),
});

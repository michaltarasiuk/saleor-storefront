import * as stylex from '@stylexjs/stylex';

import {
  paddingBlockEndStyles,
  paddingBlockStartStyles,
  paddingInlineEndStyles,
  paddingInlineStartStyles,
} from './styles/padding';
import {spacingColumnStyles, spacingRowStyles} from './styles/spacing';

type RowSpacing = keyof typeof spacingRowStyles;
type ColumnSpacing = keyof typeof spacingColumnStyles;
type CombinedSpacing = readonly [RowSpacing, ColumnSpacing];

type Spacing = RowSpacing & ColumnSpacing;

type PaddingBlockStart = keyof typeof paddingBlockStartStyles;
type PaddingBlockEnd = keyof typeof paddingBlockEndStyles;
type PaddingInlineStart = keyof typeof paddingInlineStartStyles;
type PaddingInlineEnd = keyof typeof paddingInlineEndStyles;

type PaddingBlock = PaddingBlockStart & PaddingBlockEnd;
type PaddingInline = PaddingInlineStart & PaddingInlineEnd;

type Padding = PaddingBlock & PaddingInline;
type CombinedPadding = readonly [PaddingBlock, PaddingInline];
type DetailedPadding = readonly [
  PaddingBlockStart,
  PaddingBlockEnd,
  PaddingInlineStart,
  PaddingInlineEnd,
];

interface InlineStackProps {
  readonly children: React.ReactNode;
  readonly blockAligment?: keyof typeof blockAligmentStyles;
  readonly inlineAligment?: keyof typeof inlineAligmentStyles;
  readonly padding?: Padding | CombinedPadding | DetailedPadding;
  readonly spacing?: Spacing | CombinedSpacing;
}

export function InlineStack({
  children,
  blockAligment = 'start',
  inlineAligment = 'start',
  padding = 'none',
  spacing = 'none',
}: InlineStackProps) {
  const [
    paddingInlineStart,
    paddingBlockStart,
    paddingInlineEnd,
    paddingBlockEnd,
  ] = parsePadding(padding);
  const [rowSpacing, columnSpacing] = parseSpacing(spacing);
  return (
    <div
      {...stylex.props(
        styles.base,
        blockAligmentStyles[blockAligment],
        inlineAligmentStyles[inlineAligment],
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
    flexDirection: 'row',
  },
});

const blockAligmentStyles = stylex.create({
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  baseline: {
    alignItems: 'baseline',
  },
});

const inlineAligmentStyles = stylex.create({
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

function parsePadding(padding: Padding | CombinedPadding | DetailedPadding) {
  if (typeof padding === 'string') {
    return [padding, padding, padding, padding] as const;
  }
  if (padding.length === 2) {
    return [padding[0], padding[1], padding[0], padding[1]] as const;
  }
  return padding;
}

function parseSpacing(spacing: Spacing | CombinedSpacing) {
  if (typeof spacing === 'string') {
    return [spacing, spacing] as const;
  }
  return spacing;
}

import * as stylex from '@stylexjs/stylex';

import {
  paddingBlockEndStyles,
  paddingBlockStartStyles,
  paddingInlineEndStyles,
  paddingInlineStartStyles,
} from './styles/padding';
import {spacingColumnStyles, spacingRowStyles} from './styles/spacing';
import type {NonPresentationalAccessibilityRole} from './types/accessibility';

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

type StackVariantsProps = Omit<StackProps, 'direction'>;

export function BlockStack(props: StackVariantsProps) {
  return <Stack direction="block" {...props} />;
}

export function InlineStack(props: StackVariantsProps) {
  return <Stack direction="inline" {...props} />;
}

interface StackProps {
  readonly children: React.ReactNode;
  readonly direction: keyof typeof directionStyles;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly blockAligment?: keyof typeof blockAligmentStyles;
  readonly inlineAligment?: keyof typeof inlineAligmentStyles;
  readonly padding?: Padding | CombinedPadding | DetailedPadding;
  readonly spacing?: Spacing | CombinedSpacing;
}

function Stack({
  children,
  direction,
  accessibilityLabel,
  accessibilityRole,
  blockAligment = 'start',
  inlineAligment = 'start',
  padding = 'none',
  spacing = 'none',
}: StackProps) {
  const [
    paddingInlineStart,
    paddingBlockStart,
    paddingInlineEnd,
    paddingBlockEnd,
  ] = parsePadding(padding);
  const [rowSpacing, columnSpacing] = parseSpacing(spacing);
  return (
    <div
      aria-label={accessibilityLabel}
      role={accessibilityRole}
      {...stylex.props(
        styles.base,
        directionStyles[direction],
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
  },
});

const directionStyles = stylex.create({
  block: {
    flexDirection: 'column',
  },
  inline: {
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

function parseSpacing(spacing: Spacing | CombinedSpacing) {
  let detailedSpacing: CombinedSpacing;
  if (typeof spacing === 'string') {
    detailedSpacing = [spacing, spacing] as const;
  } else {
    detailedSpacing = spacing;
  }
  return detailedSpacing;
}

function parsePadding(padding: Padding | CombinedPadding | DetailedPadding) {
  let detailedPadding: DetailedPadding;
  if (typeof padding === 'string') {
    detailedPadding = [padding, padding, padding, padding] as const;
  } else if (padding.length === 2) {
    detailedPadding = [padding[0], padding[1], padding[0], padding[1]] as const;
  } else {
    detailedPadding = padding;
  }
  return detailedPadding;
}

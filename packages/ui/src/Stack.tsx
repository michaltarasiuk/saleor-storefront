import {assertNever} from '@repo/utils/assert-never';
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

type PaddingBlockStart = keyof typeof paddingBlockStartStyles;
type PaddingBlockEnd = keyof typeof paddingBlockEndStyles;
type PaddingInlineStart = keyof typeof paddingInlineStartStyles;
type PaddingInlineEnd = keyof typeof paddingInlineEndStyles;

type PaddingBlock = PaddingBlockStart & PaddingBlockEnd;
type PaddingInline = PaddingInlineStart & PaddingInlineEnd;

type Spacing = RowSpacing & ColumnSpacing;
type Padding = PaddingBlock & PaddingInline;

export function BlockStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="block" {...props} />;
}

export function InlineStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="inline" {...props} />;
}

interface StackProps {
  readonly children: React.ReactNode;
  readonly direction: keyof typeof directionStyles;
  readonly accessibilityLabel?: string;
  readonly accessibilityRole?: NonPresentationalAccessibilityRole;
  readonly blockAligment?: keyof typeof blockAligmentStyles;
  readonly inlineAligment?: keyof typeof inlineAligmentStyles;
  readonly padding?:
    | Padding
    | readonly [PaddingBlock, PaddingInline]
    | readonly [
        PaddingBlockStart,
        PaddingBlockEnd,
        PaddingInlineStart,
        PaddingInlineEnd,
      ];
  readonly spacing?: Spacing | readonly [RowSpacing, ColumnSpacing];
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
  ] = normalizePadding(padding);
  const [rowSpacing, columnSpacing] = normalizeSpacing(spacing);
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
});

function normalizeSpacing(spacing: StackProps['spacing'] = 'none') {
  return typeof spacing === 'string' ? ([spacing, spacing] as const) : spacing;
}

function normalizePadding(padding: StackProps['padding'] = 'none') {
  if (typeof padding === 'string') {
    return [padding, padding, padding, padding] as const;
  }
  switch (padding.length) {
    case 2:
      return [padding[0], padding[1], padding[0], padding[1]] as const;
    case 4:
      return [padding[0], padding[1], padding[2], padding[3]] as const;
    default:
      assertNever(padding);
  }
}

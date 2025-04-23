import * as Slot from '@radix-ui/react-slot';
import type {StyleXStyles} from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

import {fontSizeStyles} from './styles/font-size';
import type {AccessibilityVisibility} from './types/accessibility';
import {
  baseColors,
  criticalColors,
  infoColors,
  successColors,
  warningColors,
} from './variables/colors.stylex';
import {typographyPrimary} from './variables/tokens.stylex';

interface StyleProps {
  readonly size?: keyof typeof fontSizeStyles;
  readonly appearance?: keyof typeof apperanceStyles;
  readonly emphasis?: keyof typeof emphasisStyles;
}

interface TextProps extends StyleProps {
  readonly children: React.ReactNode;
  readonly accessibilityVisibility?: AccessibilityVisibility;
  readonly asChild?: boolean;
  readonly style?: StyleXStyles;
}

export function Text({
  children,
  appearance = 'default',
  size = 'base',
  emphasis = 'base',
  accessibilityVisibility,
  asChild,
  style,
}: TextProps) {
  const Element = asChild ? Slot.Root : 'span';
  return (
    <Element
      aria-hidden={accessibilityVisibility === 'hidden'}
      {...stylex.props(
        style,
        styles.base,
        apperanceStyles[appearance],
        fontSizeStyles[size],
        emphasisStyles[emphasis]
      )}>
      {children}
    </Element>
  );
}

interface TextBlockProps extends StyleProps {
  readonly children: React.ReactNode;
}

export function TextBlock({
  children,
  appearance = 'default',
  size = 'base',
  emphasis = 'base',
}: TextBlockProps) {
  return (
    <p
      {...stylex.props(
        styles.base,
        apperanceStyles[appearance],
        fontSizeStyles[size],
        emphasisStyles[emphasis]
      )}>
      {children}
    </p>
  );
}

const styles = stylex.create({
  base: {
    fontFamily: typographyPrimary.fontFamily,
    fontWeight: typographyPrimary.base,
  },
});

const apperanceStyles = stylex.create({
  default: {
    color: baseColors.text,
  },
  subdued: {
    color: baseColors.textSubdued,
  },
  accent: {
    color: baseColors.accent,
  },
  critical: {
    color: criticalColors.critical,
  },
  info: {
    color: infoColors.info,
  },
  warning: {
    color: warningColors.warning,
  },
  success: {
    color: successColors.success,
  },
  decoative: {
    color: baseColors.decorative,
  },
});

const emphasisStyles = stylex.create({
  base: {
    fontWeight: typographyPrimary.base,
  },
  bold: {
    fontWeight: typographyPrimary.bold,
  },
  italic: {
    fontStyle: 'italic',
  },
});

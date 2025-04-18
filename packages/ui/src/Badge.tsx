import * as stylex from '@stylexjs/stylex';

import {visuallyHiddenStyle} from './styles/visually-hidden';
import type {AccessibilityVisibility} from './types/visibility';
import type {Visibility} from './types/visibility';
import {baseColors, criticalColors} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  spacing,
  typographyFontSize,
  typographyPrimary,
} from './variables/tokens.stylex';

interface BadgeProps {
  readonly children: React.ReactNode;
  readonly tone?: keyof typeof toneStyles;
  readonly size?: keyof typeof sizeStyles;
  readonly accessibilityLabel?: string;
  readonly accessibilityVisibility?: AccessibilityVisibility;
  readonly visibility?: Visibility;
}

export function Badge({
  children,
  tone = 'default',
  size = 'base',
  accessibilityLabel,
  accessibilityVisibility,
  visibility,
}: BadgeProps) {
  return (
    <div
      role={tone === 'critical' ? 'alert' : 'status'}
      aria-label={accessibilityLabel}
      aria-hidden={accessibilityVisibility === 'hidden'}
      {...stylex.props(
        styles.base,
        sizeStyles[size],
        toneStyles[tone],
        visibility === 'hidden' && visuallyHiddenStyle.base
      )}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  base: {
    width: 'fit-content',
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.small400,
    paddingBlock: '1px',
    paddingInline: spacing.small300,
    borderRadius: cornerRadius.fullyRounded,
    fontFamily: typographyPrimary.fontFamily,
    fontWeight: typographyPrimary.bold,
  },
});

const sizeStyles = stylex.create({
  extraSmall: {
    fontSize: typographyFontSize.extraSmall,
  },
  small: {
    fontSize: typographyFontSize.small,
  },
  base: {
    fontSize: typographyFontSize.base,
  },
  medium: {
    fontSize: typographyFontSize.medium,
  },
  large: {
    fontSize: typographyFontSize.large,
  },
  extraLarge: {
    fontSize: typographyFontSize.extraLarge,
  },
});

const toneStyles = stylex.create({
  default: {
    color: baseColors.textContrast,
    backgroundColor: baseColors.textSubdued,
  },
  critical: {
    color: criticalColors.text,
    backgroundColor: criticalColors.border,
  },
  subdued: {
    color: baseColors.text,
    backgroundColor: baseColors.backgroundSubdued,
    borderWidth: borderWidth.base,
    borderStyle: 'solid',
    borderColor: baseColors.border,
  },
});

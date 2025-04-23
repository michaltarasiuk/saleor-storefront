import * as stylex from '@stylexjs/stylex';
import {useVisuallyHidden} from 'react-aria';

import {fontSizeStyles as sizeStyles} from './styles/font-size';
import type {AccessibilityVisibility} from './types/accessibility';
import type {Visibility} from './types/visibility';
import {baseColors, criticalColors} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  spacing,
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
  const {visuallyHiddenProps} = useVisuallyHidden();
  return (
    <div
      role={tone === 'critical' ? 'alert' : 'status'}
      aria-label={accessibilityLabel}
      aria-hidden={accessibilityVisibility === 'hidden'}
      {...(visibility === 'hidden' ? visuallyHiddenProps : {})}
      {...stylex.props(styles.base, sizeStyles[size], toneStyles[tone])}>
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

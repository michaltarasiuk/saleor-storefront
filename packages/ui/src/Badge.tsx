import * as stylex from '@stylexjs/stylex';

import {InfoIcon} from './icons/InfoIcon';
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
  readonly iconPosition?: 'start' | 'end';
}

export function Badge({
  children,
  tone = 'default',
  size = 'base',
  iconPosition = 'start',
}: BadgeProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        sizeStyles[size],
        toneStyles[tone],
        iconPosition === 'end' && styles.reverse
      )}>
      <InfoIcon {...stylex.props(iconStyles[tone])} />
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
  reverse: {
    flexDirection: 'row-reverse',
  },
});

const sizeStyles = stylex.create({
  base: {
    fontSize: typographyFontSize.small,
  },
  small: {
    fontSize: typographyFontSize.extraSmall,
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

const iconStyles = stylex.create({
  default: {
    stroke: baseColors.textContrast,
  },
  critical: {
    stroke: criticalColors.icon,
  },
  subdued: {
    stroke: baseColors.icon,
  },
});

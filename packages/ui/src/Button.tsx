'use client';

import * as stylex from '@stylexjs/stylex';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import {
  baseColors,
  controlColors,
  criticalColors,
  primaryButtonColors,
  secondaryButtonColors,
} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  spacing,
  typographyFontSize,
  typographyPrimary,
} from './variables/tokens.stylex';

interface ButtonProps extends AriaButtonProps {
  readonly variant?: keyof typeof variantStyles;
  readonly appearance?: keyof typeof appearanceStyles;
  readonly size?: keyof typeof sizeStyles;
}

export function Button({
  size = 'base',
  appearance = 'default',
  variant = 'primary',
  isDisabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      {...stylex.props(
        styles.base,
        variantStyles[variant],
        appearanceStyles[isDisabled ? 'disabled' : appearance],
        sizeStyles[size]
      )}
      isDisabled={isDisabled}
      {...props}>
      {children}
    </AriaButton>
  );
}

const styles = stylex.create({
  base: {
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColors.background,
    fontFamily: typographyPrimary.fontFamily,
    fontSize: typographyFontSize.base,
    borderRadius: cornerRadius.base,
    borderWidth: borderWidth.base,
    borderStyle: 'solid',
    borderColor: baseColors.background,
  },
});

const variantStyles = stylex.create({
  primary: {
    color: 'var(--primary-text-color)',
    backgroundColor: 'var(--primary-background-color)',
    borderColor: 'var(--primary-border-color, var(--primary-background-color))',
    fontWeight: typographyPrimary.bold,
  },
  secondary: {
    color: 'var(--secondary-text-color)',
    borderColor: 'var(--secondary-border-color)',
    fontWeight: typographyPrimary.bold,
  },
  plain: {
    color: 'var(--plain-text-color)',
    textDecoration: 'underline',
    textUnderlinePosition: 'from-font',
    fontWeight: typographyPrimary.base,
  },
});

const appearanceStyles = stylex.create({
  default: {
    '--primary-text-color': primaryButtonColors.text,
    '--primary-background-color': primaryButtonColors.background,
    '--secondary-text-color': secondaryButtonColors.text,
    '--secondary-border-color': secondaryButtonColors.border,
    '--plain-text-color': baseColors.accent,
  },
  critical: {
    '--primary-text-color': criticalColors.textContrast,
    '--primary-background-color': criticalColors.critical,
    '--secondary-text-color': criticalColors.critical,
    '--secondary-border-color': criticalColors.critical,
    '--plain-text-color': criticalColors.critical,
  },
  disabled: {
    '--primary-text-color': baseColors.textSubdued,
    '--primary-background-color': baseColors.backgroundSubdued,
    '--primary-border-color': baseColors.border,
    '--secondary-text-color': controlColors.textSubdued,
    '--secondary-border-color': controlColors.border,
    '--plain-text-color': controlColors.textSubdued,
    cursor: 'default',
  },
});

const sizeStyles = stylex.create({
  small: {
    padding: spacing.small200,
  },
  base: {
    padding: spacing.base,
  },
  large: {
    padding: spacing.large200,
  },
  extraLarge: {
    padding: spacing.large300,
  },
});

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
  primaryButtonHoverColors,
  secondaryButtonColors,
  secondaryButtonHoverColors,
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
    color: {
      default: 'var(--primary-text)',
      ':hover': 'var(--primary-text-hover)',
    },
    backgroundColor: {
      default: 'var(--primary-background)',
      ':hover': 'var(--primary-background-hover)',
    },
    borderColor: {
      default: 'var(--primary-border)',
      ':hover': 'var(--primary-border-hover)',
    },
    fontWeight: typographyPrimary.bold,
  },
  secondary: {
    color: {
      default: 'var(--secondary-text)',
      ':hover': 'var(--secondary-text-hover)',
    },
    backgroundColor: {
      default: 'var(--secondary-background)',
      ':hover': 'var(--secondary-background-hover)',
    },
    borderColor: {
      default: 'var(--secondary-border)',
      ':hover': 'var(--secondary-border-hover)',
    },
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
    '--primary-text': primaryButtonColors.text,
    '--primary-background': primaryButtonColors.background,
    '--primary-border': primaryButtonColors.border,
    '--primary-text-hover': primaryButtonHoverColors.text,
    '--primary-background-hover': primaryButtonHoverColors.background,
    '--primary-border-hover': primaryButtonHoverColors.border,
    '--secondary-text': secondaryButtonColors.text,
    '--secondary-background': secondaryButtonColors.background,
    '--secondary-border': secondaryButtonColors.border,
    '--secondary-text-hover': secondaryButtonHoverColors.text,
    '--secondary-background-hover': secondaryButtonColors.background,
    '--secondary-border-hover': secondaryButtonHoverColors.border,
    '--plain-text': baseColors.accent,
  },
  critical: {
    '--primary-text': criticalColors.textContrast,
    '--primary-background': criticalColors.critical,
    '--secondary-text': criticalColors.critical,
    '--secondary-border': criticalColors.critical,
    '--plain-text': criticalColors.critical,
  },
  disabled: {
    '--primary-text': baseColors.textSubdued,
    '--primary-background': baseColors.backgroundSubdued,
    '--primary-border': baseColors.border,
    '--secondary-text': controlColors.textSubdued,
    '--secondary-border': controlColors.border,
    '--plain-text': controlColors.textSubdued,
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

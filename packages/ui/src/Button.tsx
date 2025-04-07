'use client';

import * as stylex from '@stylexjs/stylex';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import {
  baseColors,
  criticalColors,
  primaryButtonColors,
} from './variables/colors.stylex';
import {borderWidth, cornerRadius, spacing} from './variables/tokens.stylex';

interface ButtonProps extends AriaButtonProps {
  variant?: keyof typeof variantStyles;
  appearance?: keyof typeof appearanceStyles;
  size?: keyof typeof sizeStyles;
}

export function Button({
  variant = 'primary',
  appearance = 'default',
  size = 'base',
  children,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      {...stylex.props(
        styles.base,
        variantStyles[variant],
        appearanceStyles[appearance],
        sizeStyles[size],
      )}
      {...props}>
      {children}
    </AriaButton>
  );
}

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: cornerRadius.base,
    cursor: 'pointer',
  },
});

const variantStyles = stylex.create({
  primary: {},
  secondary: {},
  plain: {},
});

const appearanceStyles = stylex.create({
  default: {
    color: primaryButtonColors.text,
    backgroundColor: primaryButtonColors.background,
  },
  critical: {
    color: criticalColors.textContrast,
    backgroundColor: criticalColors.critical,
  },
  disabled: {
    borderWidth: borderWidth.base,
    borderStyle: 'solid',
    borderColor: baseColors.textSubdued,
    backgroundColor: baseColors.backgroundSubdued,
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

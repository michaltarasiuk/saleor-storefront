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
  readonly variant?: 'primary' | 'secondary' | 'plain';
  readonly appearance?: Exclude<
    | keyof typeof primaryStyles
    | keyof typeof secondaryStyles
    | keyof typeof plainStyles,
    'base' | 'disabled'
  >;
  readonly size?: keyof typeof sizeStyles;
}

export function Button({
  variant = 'primary',
  appearance = 'default',
  size = 'base',
  isDisabled,
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: primaryStyles,
    secondary: secondaryStyles,
    plain: plainStyles,
  }[variant];
  return (
    <AriaButton
      {...stylex.props(
        styles.base,
        variantStyles.base,
        variantStyles[isDisabled ? 'disabled' : appearance],
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

const primaryStyles = stylex.create({
  base: {
    fontWeight: typographyPrimary.bold,
  },
  default: {
    color: {
      default: primaryButtonColors.text,
      ':hover': primaryButtonHoverColors.text,
    },
    backgroundColor: {
      default: primaryButtonColors.background,
      ':hover': primaryButtonHoverColors.background,
    },
    borderColor: {
      default: primaryButtonColors.border,
      ':hover': primaryButtonHoverColors.border,
    },
  },
  critical: {
    color: criticalColors.textContrast,
    backgroundColor: criticalColors.critical,
  },
  disabled: {
    cursor: 'default',
    color: baseColors.textSubdued,
    backgroundColor: baseColors.backgroundSubdued,
    borderColor: baseColors.border,
  },
});

const secondaryStyles = stylex.create({
  base: {
    fontWeight: typographyPrimary.bold,
  },
  default: {
    color: {
      default: secondaryButtonColors.text,
      ':hover': secondaryButtonHoverColors.text,
    },
    backgroundColor: {
      default: secondaryButtonColors.background,
      ':hover': secondaryButtonHoverColors.background,
    },
    borderColor: {
      default: secondaryButtonColors.border,
      ':hover': secondaryButtonHoverColors.border,
    },
  },
  critical: {
    color: criticalColors.critical,
    borderColor: criticalColors.critical,
  },
  disabled: {
    cursor: 'default',
    color: controlColors.textSubdued,
    borderColor: controlColors.border,
  },
});

const plainStyles = stylex.create({
  base: {
    textDecoration: 'underline',
    textUnderlinePosition: 'from-font',
    fontWeight: typographyPrimary.base,
  },
  default: {
    color: baseColors.accent,
  },
  critical: {
    color: criticalColors.critical,
  },
  disabled: {
    cursor: 'default',
    color: controlColors.textSubdued,
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

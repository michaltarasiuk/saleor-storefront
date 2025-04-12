'use client';

import {assertNever} from '@repo/utils/assert-never';
import {isKeyOf} from '@repo/utils/is-keyof';
import * as stylex from '@stylexjs/stylex';
import {useState} from 'react';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import {Spinner} from './Spinner';
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
  readonly children: React.ReactNode;
  readonly variant?: 'primary' | 'secondary' | 'plain';
  readonly appearance?: Exclude<
    | keyof typeof primaryStyles
    | keyof typeof secondaryStyles
    | keyof typeof plainStyles,
    'base' | 'disabled'
  >;
  readonly size?: keyof typeof sizeStyles;
  readonly pendingLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  appearance = 'default',
  size = 'base',
  isDisabled,
  pendingLabel,
  ...props
}: ButtonProps) {
  const [isHoverd, setIsHoverd] = useState(false);
  const [variantStyles, variantHoverStyles] = mapVariantToStyles(variant);
  const iconVariantsStyles = mapVariantToIconStyles(variant);
  const hasHoverStyles =
    variantHoverStyles !== undefined && isKeyOf(variantHoverStyles, appearance);
  return (
    <AriaButton
      {...stylex.props(
        styles.base,
        variantStyles.base,
        variantStyles[appearance],
        sizeStyles[size],
        isDisabled && variantStyles.disabled,
        hasHoverStyles && isHoverd && variantHoverStyles[appearance]
      )}
      isDisabled={isDisabled}
      onHoverChange={setIsHoverd}
      {...props}>
      {({isPending}) =>
        !isPending ? (
          children
        ) : (
          <Spinner
            accessibilityLabel={pendingLabel}
            style={
              typeof iconVariantsStyles[appearance] === 'function'
                ? iconVariantsStyles[appearance](isHoverd)
                : iconVariantsStyles[appearance]
            }
          />
        )
      }
    </AriaButton>
  );
}

function mapVariantToStyles(variant: NonNullable<ButtonProps['variant']>) {
  switch (variant) {
    case 'primary':
      return [primaryStyles, primaryHoveredStyles] as const;
    case 'secondary':
      return [secondaryStyles, secondaryHoveredStyles] as const;
    case 'plain':
      return [plainStyles] as const;
    default:
      assertNever(variant);
  }
}

function mapVariantToIconStyles(variant: NonNullable<ButtonProps['variant']>) {
  switch (variant) {
    case 'primary':
      return primaryIconStyles;
    case 'secondary':
      return secondaryIconStyles;
    case 'plain':
      return plainIconStyles;
    default:
      assertNever(variant);
  }
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
    color: primaryButtonColors.text,
    backgroundColor: primaryButtonColors.background,
    borderColor: primaryButtonColors.border,
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

const primaryHoveredStyles = stylex.create({
  default: {
    color: primaryButtonHoverColors.text,
    backgroundColor: primaryButtonHoverColors.background,
    borderColor: primaryButtonHoverColors.border,
  },
});

const primaryIconStyles = stylex.create({
  default: (isHoverd: boolean) => ({
    fill: isHoverd ? primaryButtonHoverColors.icon : primaryButtonColors.icon,
  }),
  critical: {
    fill: criticalColors.textContrast,
  },
  disabled: {
    fill: controlColors.textSubdued,
  },
});

const secondaryStyles = stylex.create({
  base: {
    fontWeight: typographyPrimary.bold,
  },
  default: {
    color: secondaryButtonColors.text,
    backgroundColor: secondaryButtonColors.background,
    borderColor: secondaryButtonColors.border,
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

const secondaryHoveredStyles = stylex.create({
  default: {
    color: secondaryButtonHoverColors.text,
    backgroundColor: secondaryButtonHoverColors.background,
    borderColor: secondaryButtonHoverColors.border,
  },
});

const secondaryIconStyles = stylex.create({
  default: (isHoverd: boolean) => ({
    fill: isHoverd
      ? secondaryButtonHoverColors.icon
      : secondaryButtonColors.icon,
  }),
  critical: {
    fill: criticalColors.critical,
  },
  disabled: {
    fill: controlColors.textSubdued,
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
    opacity: 0.5,
  },
});

const plainIconStyles = stylex.create({
  default: {
    fill: baseColors.accent,
  },
  critical: {
    fill: criticalColors.critical,
  },
  disabled: {
    fill: controlColors.accent,
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

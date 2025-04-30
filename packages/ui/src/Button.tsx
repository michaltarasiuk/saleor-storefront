'use client';

import {assertNever} from '@repo/utils/assert-never';
import * as stylex from '@stylexjs/stylex';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import {Spinner} from './Spinner';
import {
  transitionDurations,
  transitionProperties,
  transitionTimingFunctions,
} from './variables/animations.stylex';
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
  opacity,
  spacing,
  typographyFontSize,
  typographyPrimary,
} from './variables/tokens.stylex';

type Variant = 'primary' | 'secondary' | 'plain';
type Appearance = Exclude<
  | keyof typeof primaryStyles
  | keyof typeof secondaryStyles
  | keyof typeof plainStyles,
  'base' | 'disabled' | 'hovered'
>;

interface ButtonProps extends AriaButtonProps {
  readonly children: React.ReactNode;
  readonly variant?: Variant;
  readonly appearance?: Appearance;
  readonly size?: keyof typeof sizeStyles;
  readonly pendingLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  appearance = 'default',
  size = 'base',
  pendingLabel,
  ...props
}: ButtonProps) {
  const [variantStyles, variantStateStyles] = mapVariantToStyles(variant);
  const [iconVariantsStyles, iconVariantsStateStyles] =
    mapVariantToIconStyles(variant);
  return (
    <AriaButton
      className={({isFocusVisible, isFocused, isDisabled, isHovered}) => {
        const {className = ''} = stylex.props(
          styles.base,
          variantStyles.base,
          variantStyles[appearance],
          sizeStyles[size],
          isFocusVisible && styles.focusVisible,
          isFocused && variantStateStyles.focused,
          isDisabled && variantStateStyles.disabled,
          isHovered && variantStateStyles.hovered
        );
        return className;
      }}
      {...props}>
      {({isHovered, isPending}) =>
        !isPending ? (
          children
        ) : (
          <Spinner
            accessibilityLabel={pendingLabel}
            style={
              isHovered
                ? iconVariantsStateStyles.hovered
                : iconVariantsStyles.default
            }
          />
        )
      }
    </AriaButton>
  );
}

function mapVariantToStyles(variant: Variant) {
  switch (variant) {
    case 'primary':
      return [primaryStyles, primaryStateStyles] as const;
    case 'secondary':
      return [secondaryStyles, secondaryStateStyles] as const;
    case 'plain':
      return [plainStyles, plainStateStyles] as const;
    default:
      assertNever(variant);
  }
}

function mapVariantToIconStyles(variant: Variant) {
  switch (variant) {
    case 'primary':
      return [primaryIconStyles, primaryIconStateStyles] as const;
    case 'secondary':
      return [secondaryIconStyles, secondaryIconStateStyles] as const;
    case 'plain':
      return [plainIconStyles, plainIconStateStyles] as const;
    default:
      assertNever(variant);
  }
}

const styles = stylex.create({
  base: {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: baseColors.background,
    fontFamily: typographyPrimary.fontFamily,
    fontSize: typographyFontSize.base,
    borderRadius: cornerRadius.base,
    borderWidth: borderWidth.base,
    borderStyle: 'solid',
    borderColor: baseColors.background,
    outline: 'none',
    outlineOffset: spacing.small600,
    outlineWidth: borderWidth.medium,
    transitionProperty: transitionProperties.color,
    transitionDuration: transitionDurations.default,
    transitionTimingFunction: transitionTimingFunctions.default,
  },
  focusVisible: {
    outlineStyle: 'solid',
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
    outlineColor: controlColors.accent,
  },
  critical: {
    color: criticalColors.textContrast,
    backgroundColor: criticalColors.critical,
    outlineColor: criticalColors.critical,
  },
});

const primaryStateStyles = stylex.create({
  focused: {
    backgroundColor: primaryButtonHoverColors.background,
    borderColor: primaryButtonHoverColors.border,
  },
  hovered: {
    color: primaryButtonHoverColors.text,
    backgroundColor: primaryButtonHoverColors.background,
    borderColor: primaryButtonHoverColors.border,
  },
  disabled: {
    cursor: 'default',
    color: baseColors.textSubdued,
    backgroundColor: baseColors.backgroundSubdued,
    borderColor: baseColors.border,
  },
});

const primaryIconStyles = stylex.create({
  default: {
    fill: primaryButtonColors.icon,
  },
  critical: {
    fill: criticalColors.textContrast,
  },
});

const primaryIconStateStyles = stylex.create({
  hovered: {
    fill: primaryButtonHoverColors.icon,
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
});

const secondaryStateStyles = stylex.create({
  focused: {
    color: secondaryButtonHoverColors.text,
  },
  hovered: {
    color: secondaryButtonHoverColors.text,
    backgroundColor: secondaryButtonHoverColors.background,
    borderColor: secondaryButtonHoverColors.border,
  },
  disabled: {
    cursor: 'default',
    color: controlColors.textSubdued,
    borderColor: controlColors.border,
  },
});

const secondaryIconStyles = stylex.create({
  default: {
    fill: secondaryButtonColors.icon,
  },
  critical: {
    fill: criticalColors.critical,
  },
});

const secondaryIconStateStyles = stylex.create({
  hovered: {
    fill: secondaryButtonHoverColors.icon,
  },
  disabled: {
    fill: controlColors.textSubdued,
  },
});

const plainStyles = stylex.create({
  base: {
    fontWeight: typographyPrimary.base,
    textDecoration: 'underline',
    textUnderlinePosition: 'from-font',
  },
  default: {
    color: baseColors.accent,
  },
  critical: {
    color: criticalColors.critical,
  },
});

const plainStateStyles = stylex.create({
  focused: {
    color: secondaryButtonHoverColors.text,
  },
  hovered: {
    color: secondaryButtonHoverColors.text,
  },
  disabled: {
    cursor: 'default',
    opacity: opacity[50],
  },
});

const plainIconStyles = stylex.create({
  default: {
    fill: baseColors.accent,
  },
  critical: {
    fill: criticalColors.critical,
  },
});

const plainIconStateStyles = stylex.create({
  hovered: {},
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

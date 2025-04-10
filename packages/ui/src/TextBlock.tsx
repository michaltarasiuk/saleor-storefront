import * as stylex from '@stylexjs/stylex';

import {
  baseColors,
  criticalColors,
  infoColors,
  successColors,
  warningColors,
} from './variables/colors.stylex';
import {typographyFontSize, typographyPrimary} from './variables/tokens.stylex';

interface TextBlockProps {
  readonly children: React.ReactNode;
  readonly size?: keyof typeof fontSizeStyles;
  readonly appearance?: keyof typeof apperanceStyles;
  readonly emphasis?: keyof typeof emphasisStyles;
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
        emphasisStyles[emphasis],
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

const fontSizeStyles = stylex.create({
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

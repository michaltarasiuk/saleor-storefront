import * as stylex from '@stylexjs/stylex';

import {type Apperance, apperanceStyles} from './styles/apperance';
import {type Emphasis, emphasisStyles} from './styles/emphasis';
import {type FontSize, fontSizeStyles} from './styles/font-size';
import {leadingStyles} from './styles/leading';
import type {AccessibilityVisibility} from './types/accessibility';
import {typographyPrimary} from './variables/tokens.stylex';

interface TextProps {
  readonly children: React.ReactNode;
  readonly accessibilityVisibility?: AccessibilityVisibility;
  readonly size?: FontSize;
  readonly appearance?: Apperance;
  readonly emphasis?: Emphasis;
}

export function Text({
  children,
  accessibilityVisibility,
  appearance = 'default',
  size = 'base',
  emphasis = 'base',
}: TextProps) {
  return (
    <span
      aria-hidden={accessibilityVisibility === 'hidden'}
      {...stylex.props(
        styles.base,
        leadingStyles.base,
        apperanceStyles[appearance],
        fontSizeStyles[size],
        emphasisStyles[emphasis]
      )}>
      {children}
    </span>
  );
}

export function TextBlock({
  children,
  appearance = 'default',
  size = 'base',
  emphasis = 'base',
}: Omit<TextProps, 'accessibilityVisibility'>) {
  return (
    <p
      {...stylex.props(
        styles.base,
        leadingStyles.base,
        apperanceStyles[appearance],
        fontSizeStyles[size],
        emphasisStyles[emphasis]
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

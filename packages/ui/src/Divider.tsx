import * as stylex from '@stylexjs/stylex';

import {baseColors} from './variables/colors.stylex';
import {borderWidth} from './variables/tokens.stylex';

interface DividerProps {
  readonly direction?: keyof typeof directionStyles;
  readonly size?:
    | keyof typeof inlineDirectionSizeStyles
    | keyof typeof blockDirectionSizeStyles;
}

export function Divider({direction = 'inline', size = 'small'}: DividerProps) {
  return (
    <div
      {...stylex.props(
        styles.base,
        directionStyles[direction],
        direction === 'inline'
          ? inlineDirectionSizeStyles[size]
          : blockDirectionSizeStyles[size]
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    backgroundColor: baseColors.border,
  },
});

const directionStyles = stylex.create({
  inline: {
    inlineSize: '100%',
  },
  block: {
    blockSize: '100%',
  },
});

const inlineDirectionSizeStyles = stylex.create({
  small: {
    blockSize: borderWidth.base,
  },
  base: {
    blockSize: borderWidth.medium,
  },
  large: {
    blockSize: borderWidth.thick,
  },
  extraLarge: {
    blockSize: borderWidth.extraThick,
  },
});

const blockDirectionSizeStyles = stylex.create({
  small: {
    inlineSize: borderWidth.base,
  },
  base: {
    inlineSize: borderWidth.medium,
  },
  large: {
    inlineSize: borderWidth.thick,
  },
  extraLarge: {
    inlineSize: borderWidth.extraThick,
  },
});

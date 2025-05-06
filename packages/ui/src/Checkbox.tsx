'use client';

import * as stylex from '@stylexjs/stylex';
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

import {CheckmarkIcon} from './icons/CheckmarkIcon';
import {Text} from './Text';
import {
  transitionDurations,
  transitionProperties,
  transitionTimingFunctions,
} from './variables/animations.stylex';
import {controlColors, criticalColors} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  opacity,
  spacing,
} from './variables/tokens.stylex';

interface CheckboxProps extends AriaCheckboxProps {
  readonly children: React.ReactNode;
}

export function Checkbox({children, ...props}: CheckboxProps) {
  return (
    <AriaCheckbox {...stylex.props(containerStyles.base)} {...props}>
      {({isFocusVisible, isFocused, isInvalid, isPressed, isSelected}) => (
        <>
          <div
            {...stylex.props(
              boxStyles.base,
              isFocusVisible && boxStyles.focusVisible,
              isFocused && boxStyles.focus,
              isPressed && boxStyles.pressed,
              isInvalid && boxStyles.invalid,
              isSelected && boxStyles.selected
            )}>
            <CheckmarkIcon
              aria-hidden="true"
              {...stylex.props(iconStyles.base)}
            />
          </div>
          <Text>{children}</Text>
        </>
      )}
    </AriaCheckbox>
  );
}

const containerStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small100,
    width: 'fit-content',
    cursor: 'pointer',
  },
});

const boxStyles = stylex.create({
  base: {
    position: 'relative',
    height: '20px',
    width: '20px',
    backgroundColor: controlColors.background,
    borderRadius: cornerRadius.base,
    padding: spacing.small400,
    boxShadow: `inset 0 0 0 ${borderWidth.base} ${controlColors.border}`,
    transitionProperty: transitionProperties.shadow,
    transitionDuration: transitionDurations.base,
    transitionTimingFunction: transitionTimingFunctions.default,
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: opacity[30],
      borderRadius: cornerRadius.base,
      transitionProperty: transitionProperties.shadow,
      transitionDuration: transitionDurations.base,
      transitionTimingFunction: transitionTimingFunctions.default,
    },
  },
  focusVisible: {
    '::before': {
      boxShadow: `0 0 0 .2rem ${controlColors.accent}`,
    },
  },
  focus: {
    boxShadow: `inset 0 0 0 ${borderWidth.base} ${controlColors.accent}`,
  },
  pressed: {
    boxShadow: `inset 0 0 0 ${borderWidth.base} ${controlColors.accent}`,
  },
  invalid: {
    boxShadow: `inset 0 0 0 ${borderWidth.medium} ${criticalColors.critical}`,
  },
  selected: {
    boxShadow: `inset 0 0 0 1.6rem ${controlColors.decorative}`,
  },
});

const iconStyles = stylex.create({
  base: {
    stroke: controlColors.accentContrast,
  },
});

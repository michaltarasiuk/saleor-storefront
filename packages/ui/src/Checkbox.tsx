'use client';

import * as stylex from '@stylexjs/stylex';
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

import {CheckmarkIcon} from './icons/CheckmarkIcon';
import {Text} from './Text';
import {transition} from './variables/animations.stylex';
import {controlColors, criticalColors} from './variables/colors.stylex';
import {cornerRadius, opacity, spacing} from './variables/tokens.stylex';

interface CheckboxProps extends AriaCheckboxProps {
  readonly children: React.ReactNode;
}

export function Checkbox({children, ...props}: CheckboxProps) {
  return (
    <AriaCheckbox {...stylex.props(styles.base)} {...props}>
      {({isFocusVisible, isFocused, isInvalid, isPressed, isSelected}) => (
        <>
          <div
            {...stylex.props(
              checkboxStyles.base,
              isFocusVisible && checkboxStyles.focusedVisible,
              isFocused && checkboxStyles.focused,
              isPressed && checkboxStyles.pressed,
              isInvalid && checkboxStyles.invalid,
              isSelected && checkboxStyles.selected
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

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small100,
    width: 'fit-content',
    cursor: 'pointer',
  },
});

const checkboxStyles = stylex.create({
  base: {
    position: 'relative',
    height: '20px',
    width: '20px',
    backgroundColor: controlColors.background,
    borderRadius: cornerRadius.base,
    padding: spacing.small400,
    boxShadow: `inset 0 0 0 1px ${controlColors.border}`,
    transitionProperty: 'box-shadow',
    transitionDuration: transition.transitionDuration,
    transitionTimingFunction: transition.transitionTimingFunction,
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: opacity[25],
      borderRadius: cornerRadius.base,
      transitionProperty: 'box-shadow',
      transitionDuration: transition.transitionDuration,
      transitionTimingFunction: transition.transitionTimingFunction,
    },
  },
  focusedVisible: {
    '::before': {
      boxShadow: `0 0 0 .2rem ${controlColors.accent}`,
    },
  },
  focused: {
    boxShadow: `inset 0 0 0 1px ${controlColors.accent}`,
  },
  pressed: {
    boxShadow: `inset 0 0 0 1px ${controlColors.accent}`,
  },
  invalid: {
    boxShadow: `inset 0 0 0 2px ${criticalColors.critical}`,
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

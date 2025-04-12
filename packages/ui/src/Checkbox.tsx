'use client';

import * as stylex from '@stylexjs/stylex';
import {Checkbox as AriaCheckbox} from 'react-aria-components';

import {CheckmarkIcon} from './icons/CheckmarkIcon';
import {Text} from './Text';
import {transition} from './variables/animations.stylex';
import {controlColors, criticalColors} from './variables/colors.stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

interface CheckboxProps {
  readonly children: React.ReactNode;
  readonly name: string;
  readonly isSelected: boolean;
  readonly onChange: (value: boolean) => void;
}

export function Checkbox({children, ...props}: CheckboxProps) {
  return (
    <AriaCheckbox {...stylex.props(containerStyles.base)} {...props}>
      {({isFocusVisible, isFocused, isInvalid, isPressed, isSelected}) => (
        <>
          <div
            {...stylex.props(
              checkboxStyles.checkbox,
              isFocusVisible && checkboxStyles.focusedVisible,
              isFocused && checkboxStyles.focused,
              isPressed && checkboxStyles.pressed,
              isInvalid && checkboxStyles.invalid,
              isSelected && checkboxStyles.selected
            )}>
            <CheckmarkIcon
              aria-hidden="true"
              {...stylex.props(checkmarkStyles.base)}
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

const checkboxStyles = stylex.create({
  checkbox: {
    '--box-shadow-color': controlColors.border,
    position: 'relative',
    height: '20px',
    width: '20px',
    backgroundColor: controlColors.background,
    borderRadius: cornerRadius.base,
    padding: spacing.small400,
    boxShadow: 'inset 0 0 0 1px var(--box-shadow-color)',
    transition: `box-shadow ${transition.transitionDuration} ${transition.transitionTimingFunction}`,
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.3,
      borderRadius: cornerRadius.base,
      transition: `box-shadow ${transition.transitionDuration} ${transition.transitionTimingFunction}`,
    },
  },
  focusedVisible: {
    '::before': {
      boxShadow: '0 0 0 .2rem var(--box-shadow-color)',
    },
  },
  focused: {
    '--box-shadow-color': controlColors.accent,
  },
  pressed: {
    '--box-shadow-color': controlColors.accent,
  },
  invalid: {
    boxShadow: `inset 0 0 0 2px ${criticalColors.critical}`,
  },
  selected: {
    boxShadow: `inset 0 0 0 1.6rem ${controlColors.decorative}`,
  },
});

const checkmarkStyles = stylex.create({
  base: {
    stroke: controlColors.accentContrast,
  },
});

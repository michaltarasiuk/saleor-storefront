'use client';

import * as stylex from '@stylexjs/stylex';
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
} from 'react-aria-components';

import {Text} from './Text';
import {transition} from './variables/animations.stylex';
import {controlColors} from './variables/colors.stylex';
import {cornerRadius, opacity, spacing} from './variables/tokens.stylex';

interface SwitchProps extends AriaSwitchProps {
  readonly children: React.ReactNode;
}

export function Switch({children, isDisabled, ...props}: SwitchProps) {
  return (
    <AriaSwitch
      isDisabled={isDisabled}
      {...stylex.props(styles.base, isDisabled && styles.disabled)}
      {...props}>
      {({isFocusVisible, isFocused, isPressed, isSelected}) => (
        <>
          <Text>{children}</Text>
          <div
            {...stylex.props(
              indicatorStyles.base,
              isFocusVisible && indicatorStyles.focusedVisible,
              isFocused && indicatorStyles.focused,
              isPressed && indicatorStyles.pressed,
              isSelected && indicatorStyles.selected
            )}
          />
        </>
      )}
    </AriaSwitch>
  );
}

const styles = stylex.create({
  base: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: spacing.small100,
    cursor: 'pointer',
  },
  disabled: {
    cursor: 'default',
    opacity: opacity[50],
  },
});

const indicatorStyles = stylex.create({
  base: {
    position: 'relative',
    width: '40px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: controlColors.background,
    borderRadius: cornerRadius.fullyRounded,
    boxShadow: `inset 0 0 0 1px ${controlColors.border}`,
    transitionDuration: transition.transitionDuration,
    transitionTimingFunction: transition.transitionTimingFunction,
    '::before': {
      content: '""',
      position: 'absotlute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: opacity[25],
      borderRadius: cornerRadius.fullyRounded,
      transitionDuration: transition.transitionDuration,
      transitionTimingFunction: transition.transitionTimingFunction,
    },
    '::after': {
      content: "''",
      position: 'absolute',
      left: spacing.small400,
      width: '14px',
      height: '14px',
      borderRadius: cornerRadius.fullyRounded,
      backgroundColor: controlColors.textSubdued,
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
  selected: {
    boxShadow: `inset 0 0 0 1.6rem ${controlColors.accent}`,
    '::after': {
      width: '20px',
      height: '20px',
      left: `calc(100% - 20px - ${spacing.small600})`,
      backgroundColor: controlColors.accentContrast,
    },
  },
});

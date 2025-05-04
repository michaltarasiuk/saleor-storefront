'use client';

import * as stylex from '@stylexjs/stylex';
import type {
  ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  ToggleButtonProps as AriaToggleButtonProps,
} from 'react-aria-components';
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonGroup as AriaToggleButtonGroup,
} from 'react-aria-components';

import {controlColors, controlSelectedColors} from './variables/colors.stylex';
import {borderWidth, cornerRadius, spacing} from './variables/tokens.stylex';

interface ToggleButtonGroupProps
  extends Omit<AriaToggleButtonGroupProps, 'style'> {
  readonly style?: stylex.StyleXStyles;
}

export function ToggleButtonGroup({style, ...props}: ToggleButtonGroupProps) {
  return (
    <AriaToggleButtonGroup
      {...props}
      {...stylex.props(toggleButtonGroupStyles.base, style)}>
      {props.children}
    </AriaToggleButtonGroup>
  );
}

const toggleButtonGroupStyles = stylex.create({
  base: {
    display: 'flex',
    gap: spacing.small200,
    padding: spacing.small500,
    borderRadius: cornerRadius.large,
  },
});

interface ToggleButtonProps extends AriaToggleButtonProps {
  readonly icon: (props: React.ComponentProps<'svg'>) => React.JSX.Element;
}

export function ToggleButton({icon: Icon, ...props}: ToggleButtonProps) {
  return (
    <AriaToggleButton
      className={({isFocusVisible, isSelected}) => {
        const {className = ''} = stylex.props(
          toggleButtonStyles.base,
          isFocusVisible && toggleButtonStyles.focusVisible,
          isSelected && toggleButtonStyles.selected
        );
        return className;
      }}
      {...props}>
      {({isSelected}) => (
        <Icon
          aria-hidden="true"
          {...stylex.props(iconStyles.base, isSelected && iconStyles.selected)}
        />
      )}
    </AriaToggleButton>
  );
}

const toggleButtonStyles = stylex.create({
  base: {
    backgroundColor: controlColors.backgroundSubdued,
    padding: spacing.small200,
    border: 'none',
    borderRadius: cornerRadius.large,
    cursor: 'pointer',
    outline: 'none',
  },
  selected: {
    backgroundColor: controlColors.background,
  },
  focusVisible: {
    outlineColor: controlColors.accent,
    outlineOffset: spacing.small600,
    outlineStyle: 'solid',
    outlineWidth: borderWidth.medium,
  },
});

const iconStyles = stylex.create({
  base: {
    width: '18px',
    height: '18px',
    stroke: controlColors.accent,
  },
  selected: {
    stroke: controlSelectedColors.accent,
  },
});

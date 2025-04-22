'use client';

import {
  ToggleButtonGroup as AriaToggleButtonGroup,
  ToggleButton as AriaToggleButton,
} from 'react-aria-components';
import * as stylex from '@stylexjs/stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

export function ToggleButtonGroup(
  props: React.ComponentProps<typeof AriaToggleButtonGroup>
) {
  return (
    <AriaToggleButtonGroup
      {...props}
      {...stylex.props(toggleButtonGroupStyles.base)}>
      {props.children}
    </AriaToggleButtonGroup>
  );
}

const toggleButtonGroupStyles = stylex.create({
  base: {
    display: 'flex',
    gap: spacing.small200,
    padding: spacing.small500,
    backgroundColor: '#EDEDED',
    borderRadius: cornerRadius.large,
  },
});

export function ToggleButton({
  isSelected,
  ...props
}: React.ComponentProps<typeof AriaToggleButton>) {
  return (
    <AriaToggleButton
      isSelected={isSelected}
      {...props}
      {...stylex.props(
        toggleButtonStyles.base,
        isSelected && toggleButtonStyles.selected
      )}>
      {props.children}
    </AriaToggleButton>
  );
}

const toggleButtonStyles = stylex.create({
  base: {
    padding: spacing.small200,
    border: 'none',
    borderRadius: cornerRadius.large,
    cursor: 'pointer',
  },
  selected: {
    backgroundColor: '#FFFFFF',
  },
});

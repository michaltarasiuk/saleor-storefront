'use client';

import * as Slot from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import type {
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from 'react-aria-components';
import {ToggleButton, ToggleButtonGroup} from 'react-aria-components';

import {controlColors, controlSelectedColors} from './variables/colors.stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

export function ToggleIconButtonGroup(props: ToggleButtonGroupProps) {
  return (
    <ToggleButtonGroup
      {...props}
      {...stylex.props(toggleIconButtonGroupStyles.base)}>
      {props.children}
    </ToggleButtonGroup>
  );
}

const toggleIconButtonGroupStyles = stylex.create({
  base: {
    display: 'flex',
    gap: spacing.small200,
    padding: spacing.small500,
    borderRadius: cornerRadius.large,
  },
});

interface ToggleIconButtonProps extends ToggleButtonProps {
  readonly children: React.ReactNode;
}

export function ToggleIconButton({
  isSelected,
  ...props
}: ToggleIconButtonProps) {
  return (
    <ToggleButton
      isSelected={isSelected}
      {...props}
      {...stylex.props(
        toggleIconButtonStyles.base,
        isSelected && toggleIconButtonStyles.selected
      )}>
      {({isSelected}) => (
        <Slot.Root
          {...stylex.props(iconStyles.base, isSelected && iconStyles.selected)}>
          {props.children}
        </Slot.Root>
      )}
    </ToggleButton>
  );
}

const toggleIconButtonStyles = stylex.create({
  base: {
    backgroundColor: controlColors.backgroundSubdued,
    padding: spacing.small200,
    border: 'none',
    borderRadius: cornerRadius.large,
    cursor: 'pointer',
  },
  selected: {
    backgroundColor: controlColors.background,
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

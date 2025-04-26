'use client';

import * as stylex from '@stylexjs/stylex';
import {Label, ProgressBar} from 'react-aria-components';

import {Text} from './Text';
import {baseColors, criticalColors} from './variables/colors.stylex';
import {borderWidth} from './variables/tokens.stylex';

interface ProgressProps {
  readonly accessibilityLabel: string;
  readonly value: number;
  readonly max?: number;
  readonly tone?: keyof typeof toneVariants;
}

export function Progress({
  value,
  accessibilityLabel,
  max = 1,
  tone = 'auto',
}: ProgressProps) {
  if (value < 0 || !Number.isInteger(value)) {
    throw new Error(
      `Progress value must be a non-negative integer between 0 and the maximum value.`
    );
  }
  return (
    <ProgressBar value={value} maxValue={max}>
      {({percentage = 0}) => (
        <>
          <div {...stylex.props(barStyles.base)}>
            <div
              {...stylex.props(
                fillStyles.base,
                fillStyles.width(percentage),
                toneVariants[tone]
              )}
            />
          </div>
          <Text appearance={tone === 'auto' ? 'default' : 'critical'} asChild>
            <Label>{accessibilityLabel}</Label>
          </Text>
        </>
      )}
    </ProgressBar>
  );
}

const barStyles = stylex.create({
  base: {
    height: '5px',
    backgroundColor: baseColors.backgroundSubdued,
    borderRadius: '30px',
    boxShadow: `inset 0 0 0 ${borderWidth.base} ${baseColors.border}`,
  },
});

const toneVariants = stylex.create({
  auto: {
    '--tone-color': baseColors.accent,
  },
  critical: {
    '--tone-color': criticalColors.critical,
  },
});

const fillStyles = stylex.create({
  base: {
    height: '100%',
    borderRadius: '30px',
    backgroundColor: 'var(--tone-color)',
  },
  width: (percentage: number) => ({width: percentage + '%'}),
});

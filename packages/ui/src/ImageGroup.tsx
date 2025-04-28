'use client';

import {assertNever} from '@repo/utils/assert-never';
import * as stylex from '@stylexjs/stylex';
import React, {createContext} from 'react';

import {spacing} from './variables/tokens.stylex';

export const ImageGroupGridContext = createContext(false);
export const ImageGroupInlineStackContext = createContext(false);

interface ImageGroupProps {
  readonly children: React.ReactNode;
  readonly variant: keyof typeof variantStyles;
  readonly accessibilityLabel?: string;
}

export function ImageGroup({
  accessibilityLabel,
  children,
  variant,
}: ImageGroupProps) {
  switch (variant) {
    case 'grid':
      return (
        <ImageGroupGridContext value={true}>
          <div
            aria-label={accessibilityLabel}
            {...stylex.props(variantStyles[variant])}>
            {children}
          </div>
        </ImageGroupGridContext>
      );
    case 'inlineStack': {
      return (
        <ImageGroupInlineStackContext value={true}>
          <div
            aria-label={accessibilityLabel}
            {...stylex.props(variantStyles[variant])}>
            {children}
          </div>
        </ImageGroupInlineStackContext>
      );
    }
    default:
      assertNever(variant);
  }
}

const variantStyles = stylex.create({
  grid: {
    minHeight: '315px',
    display: 'grid',
    gap: spacing.small200,
    ':has(:first-of-type:nth-last-of-type(1))': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'repeat(1, 1fr)',
    },
    ':has(:first-of-type:nth-last-of-type(2))': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    ':has(:first-of-type:nth-last-of-type(3))': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    },
    ':has(:first-of-type:nth-last-of-type(4))': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    },
  },
  inlineStack: {
    display: 'flex',
  },
});

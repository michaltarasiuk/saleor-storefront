import * as stylex from '@stylexjs/stylex';
import type {ElementType} from 'react';

import type {Breakpoints} from './types/breakpoints';
import {spacing} from './variables/tokens.stylex';

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly style?: stylex.StyleXStyles;
  readonly elementType?: ElementType;
}

export function Container({
  children,
  style,
  elementType: ElementType = 'div',
}: ContainerProps) {
  return (
    <ElementType {...stylex.props(styles.base, style)}>{children}</ElementType>
  );
}

const styles = stylex.create({
  base: {
    margin: '0 auto',
    paddingInline: {
      default: spacing.large200,
      ['@media (width >= 40rem)' satisfies Breakpoints['Sm']]: spacing.none,
    },
    maxWidth: {
      ['@media (width >= 40rem)' satisfies Breakpoints['Sm']]: '40rem',
      ['@media (width >= 48rem)' satisfies Breakpoints['Md']]: '48rem',
      ['@media (width >= 64rem)' satisfies Breakpoints['Lg']]: '64rem',
      ['@media (width >= 80rem)' satisfies Breakpoints['Xl']]: '80rem',
      ['@media (width >= 96rem)' satisfies Breakpoints['Xxl']]: '96rem',
    },
  },
});

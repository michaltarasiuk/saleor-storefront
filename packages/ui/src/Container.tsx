import * as stylex from '@stylexjs/stylex';
import type {ElementType} from 'react';

import type {ViewportInlineSizes} from './consts/responsive';
import {spacing} from './variables/tokens.stylex';

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly elementType?: ElementType;
  readonly style?: stylex.StyleXStyles;
}

export function Container({
  children,
  elementType: ElementType = 'div',
  style,
}: ContainerProps) {
  return (
    <ElementType {...stylex.props(styles.base, style)}>{children}</ElementType>
  );
}

const styles = stylex.create({
  base: {
    width: '100%',
    margin: '0 auto',
    paddingInline: {
      default: spacing.large200,
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        spacing.none,
    },
    maxWidth: {
      ['@media (width >= 40rem)' satisfies ViewportInlineSizes['small']]:
        '40rem',
      ['@media (width >= 48rem)' satisfies ViewportInlineSizes['medium']]:
        '48rem',
      ['@media (width >= 64rem)' satisfies ViewportInlineSizes['large']]:
        '64rem',
      ['@media (width >= 80rem)' satisfies ViewportInlineSizes['extraLarge']]:
        '80rem',
      ['@media (width >= 96rem)' satisfies ViewportInlineSizes['extraExtraLarge']]:
        '96rem',
    },
  },
});

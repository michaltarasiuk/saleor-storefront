import * as stylex from '@stylexjs/stylex';
import type {ElementType} from 'react';

import type {MediaQuerySizes} from './consts/media-query';
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
    margin: '0 auto',
    paddingInline: {
      default: spacing.large200,
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['Min']['Small']]:
        spacing.none,
    },
    maxWidth: {
      ['@media (width >= 40rem)' satisfies MediaQuerySizes['Min']['Small']]:
        '40rem',
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['Min']['Medium']]:
        '48rem',
      ['@media (width >= 64rem)' satisfies MediaQuerySizes['Min']['Large']]:
        '64rem',
      ['@media (width >= 80rem)' satisfies MediaQuerySizes['Min']['ExtraLarge']]:
        '80rem',
      ['@media (width >= 96rem)' satisfies MediaQuerySizes['Min']['ExtraExtraLarge']]:
        '96rem',
    },
  },
});

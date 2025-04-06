import * as stylex from '@stylexjs/stylex';
import {JSX} from 'react';

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly tag: keyof JSX.IntrinsicElements;
  readonly style?: stylex.StyleXStyles;
}

export function Container({children, style, tag: Tag = 'div'}: ContainerProps) {
  return <Tag {...stylex.props(styles.base, style)}>{children}</Tag>;
}

const Breakpoints = {
  Sm: '@media (width >= 40rem)',
  Md: '@media (width >= 48rem)',
  Lg: '@media (width >= 64rem)',
  Xl: '@media (width >= 80rem)',
  Xxl: '@media (width >= 96rem)',
};

const styles = stylex.create({
  base: {
    margin: '0 auto !important', // Temporary important to override
    maxWidth: {
      [Breakpoints.Sm]: '40rem',
      [Breakpoints.Md]: '48rem',
      [Breakpoints.Lg]: '64rem',
      [Breakpoints.Xl]: '80rem',
      [Breakpoints.Xxl]: '96rem',
    },
  },
});

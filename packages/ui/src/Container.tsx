import * as stylex from '@stylexjs/stylex';

interface ContainerProps {
  readonly children: React.ReactNode;
  readonly style?: stylex.StyleXStyles;
}

export function Container({children, style}: ContainerProps) {
  return <div {...stylex.props(styles.base, style)}>{children}</div>;
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
    margin: '0 auto',
    maxWidth: {
      [Breakpoints.Sm]: '40rem',
      [Breakpoints.Md]: '48rem',
      [Breakpoints.Lg]: '64rem',
      [Breakpoints.Xl]: '80rem',
      [Breakpoints.Xxl]: '96rem',
    },
  },
});

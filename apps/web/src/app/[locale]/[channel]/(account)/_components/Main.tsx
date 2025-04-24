import {Container} from '@repo/ui/Container';
import * as stylex from '@stylexjs/stylex';

export function Main({children}: {readonly children: React.ReactNode}) {
  return (
    <Container elementType="main" style={mainStyles.base}>
      {children}
    </Container>
  );
}

const mainStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
});

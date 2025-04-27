import {Container} from '@repo/ui/Container';
import * as stylex from '@stylexjs/stylex';

import {Footer} from './Footer';
import {Header} from './Header';

export function PageLayout({children}: {readonly children: React.ReactNode}) {
  return (
    <>
      <Header />
      <Container elementType="main" style={mainStyles.base}>
        {children}
      </Container>
      <Footer />
    </>
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

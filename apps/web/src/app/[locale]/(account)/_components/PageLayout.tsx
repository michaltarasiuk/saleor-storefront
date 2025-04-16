import {Container} from '@repo/ui/Container';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

import {Footer} from './Footer';
import {GlobalNav} from './GlobalNav';

export function PageLayout({children}: {readonly children: React.ReactNode}) {
  return (
    <>
      <header {...stylex.props(headerStyles.base)}>
        <GlobalNav />
      </header>
      <Container elementType="main" style={mainStyles.base}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

const headerStyles = stylex.create({
  base: {
    backgroundColor: baseColors.background,
    paddingBlock: spacing.large400,
  },
});

const mainStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
});

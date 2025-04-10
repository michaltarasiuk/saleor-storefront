import '@/src/app/app.css';

import {Container} from '@repo/ui/Container';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import {Inter} from 'next/font/google';

import {brandedTheme} from '@/src/themes/branded';

import {Footer} from './_components/Footer';
import {GlobalNav} from './_components/GlobalNav';

const inter = Inter({subsets: ['latin']});

interface AccountLayoutProps {
  readonly children: React.ReactNode;
}

export default function AccountLayout({children}: AccountLayoutProps) {
  return (
    <html lang="en" className={inter.className} {...brandedTheme()}>
      <body {...stylex.props(bodyStyles.base)}>
        <Header />
        <Container elementType="main" style={mainStyles.base}>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header {...stylex.props(headerStyles.base)}>
      <GlobalNav />
    </header>
  );
}

const bodyStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: baseColors.backgroundSubdued,
  },
});

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

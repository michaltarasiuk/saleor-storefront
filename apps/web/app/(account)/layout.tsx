import '../app.css';

import {Container} from '@repo/ui/Container';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';
import {Inter} from 'next/font/google';

import {Footer} from './_components/Footer';
import {GlobalNav} from './_components/GlobalNav';

const inter = Inter({subsets: ['latin']});

interface AccountLayoutProps {
  readonly children: React.ReactNode;
}

export default function AccountLayout({children}: AccountLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body {...stylex.props(bodyStyles.base)}>
        <GlobalNav />
        <Container style={containerStyles.base}>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}

const bodyStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: baseColors.backgroundSubdued,
  },
});

const containerStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
});

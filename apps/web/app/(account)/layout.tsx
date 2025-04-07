import '../app.css';

import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';
import {Inter} from 'next/font/google';

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
        {children}
      </body>
    </html>
  );
}

const bodyStyles = stylex.create({
  base: {
    backgroundColor: baseColors.backgroundSubdued,
  },
});

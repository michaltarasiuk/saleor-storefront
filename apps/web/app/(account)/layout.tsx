import '../app.css';

import {Heading, HeadingGroup} from '@repo/ui/Heading';
import {Inter} from 'next/font/google';

import {GlobalNav} from './_components/GlobalNav';

const inter = Inter({subsets: ['latin']});

interface AccountLayoutProps {
  readonly children: React.ReactNode;
}

export default function AccountLayout({children}: AccountLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalNav />
        {children}
        <Heading>Hello</Heading>
        <HeadingGroup>
          <Heading>Hello 2</Heading>
        </HeadingGroup>
      </body>
    </html>
  );
}

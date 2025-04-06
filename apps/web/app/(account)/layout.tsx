import '../app.css';

import {GlobalNav} from './_components/GlobalNav';

interface AccountLayoutProps {
  readonly children: React.ReactNode;
}

export default function AccountLayout({children}: AccountLayoutProps) {
  return (
    <html lang="en">
      <body>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}

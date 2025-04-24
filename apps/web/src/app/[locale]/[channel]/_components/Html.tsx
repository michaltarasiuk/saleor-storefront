'use client';

import {Inter} from 'next/font/google';
import {useLocale} from 'react-aria-components';

const inter = Inter({subsets: ['latin']});

export function Html({children}: {readonly children: React.ReactNode}) {
  const {locale, direction} = useLocale();
  return (
    <html lang={locale} dir={direction} className={inter.className}>
      {children}
    </html>
  );
}

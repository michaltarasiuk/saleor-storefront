import '@/app/app.css';

import type {Locale} from '@lingui/core';

import {I18nProvider} from '@/i18n/I18nProvider';
import {
  getLocaleMessages,
  linguiConfigHelpers,
  setActiveI18nInstance,
} from '@/i18n/utils';

interface Params {
  readonly locale: Locale;
}

interface ShopLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<Params>;
}

export default async function ShopLayout({children, params}: ShopLayoutProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} messages={getLocaleMessages(locale)}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

export function generateStaticParams(): Params[] {
  return linguiConfigHelpers.supportedLocales.map(locale => ({locale}));
}

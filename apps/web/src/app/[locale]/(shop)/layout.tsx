import '@/app/app.css';

import type {Locale} from '@lingui/core';
import {RouterProvider} from '@repo/ui/providers/RouterProvider';

import {I18nProvider} from '@/i18n/I18nProvider';
import {
  getLocaleMessages,
  linguiConfigHelpers,
  setActiveI18nInstance,
} from '@/i18n/utils';

import {Html} from '../_components/Html';

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
    <I18nProvider locale={locale} messages={getLocaleMessages(locale)}>
      <RouterProvider>
        <Html>
          <body>{children}</body>
        </Html>
      </RouterProvider>
    </I18nProvider>
  );
}

export function generateStaticParams(): Params[] {
  return linguiConfigHelpers.supportedLocales.map(locale => ({locale}));
}

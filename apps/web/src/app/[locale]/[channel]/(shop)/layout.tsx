import '@/app/app.css';

import {RouterProvider} from '@repo/ui/RouterProvider';

import {I18nProvider} from '@/i18n/I18nProvider';
import {getLocaleMessages, setActiveI18nInstance} from '@/i18n/utils';

import {Html} from '../_components/Html';
import type {Params} from '../generate-static-params';

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

export {generateStaticParams} from '../generate-static-params';
export const dynamicParams = false;

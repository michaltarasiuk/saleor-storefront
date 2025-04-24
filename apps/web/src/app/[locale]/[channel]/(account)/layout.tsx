import '@/app/app.css';

import {RouterProvider} from '@repo/ui/RouterProvider';

import {I18nProvider} from '@/i18n/I18nProvider';
import {getLocaleMessages, setActiveI18nInstance} from '@/i18n/utils';

import {Html} from '../_components/Html';
import type {Params} from '../generate-static-params';
import {Body} from './_components/Body';
import {Footer} from './_components/Footer';
import {Header} from './_components/Header';
import {Main} from './_components/Main';
import {QueryClientProvider} from './_components/QueryClientProvider';

interface AccountLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<Params>;
}

export default async function AccountLayout({
  children,
  params,
}: AccountLayoutProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <I18nProvider locale={locale} messages={getLocaleMessages(locale)}>
      <RouterProvider>
        <QueryClientProvider>
          <Html>
            <Body>
              <Header />
              <Main>{children}</Main>
              <Footer />
            </Body>
          </Html>
        </QueryClientProvider>
      </RouterProvider>
    </I18nProvider>
  );
}

export {generateStaticParams} from '../generate-static-params';
export const dynamicParams = false;

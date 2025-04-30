import '@/app/app.css';

import {BlockSpacer} from '@repo/ui/BlockSpacer';
import {Container} from '@repo/ui/Container';
import {RouterProvider} from '@repo/ui/RouterProvider';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';

import {I18nProvider} from '@/i18n/I18nProvider';
import {getLocaleMessages, setActiveI18nInstance} from '@/i18n/utils';

import {Html} from '../_components/Html';
import type {Params} from '../params';
import {Footer} from './_components/Footer';
import {Header} from './_components/Header';
import {QueryClientProvider} from './_components/QueryClientProvider';

export {generateStaticParams} from '../params';

export const dynamicParams = false;

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
            <body {...stylex.props(bodyStyles.base)}>
              <Header />
              <Container elementType="main" style={mainStyles.base}>
                {children}
              </Container>
              <BlockSpacer spacing="extraLoose" />
              <Footer />
            </body>
          </Html>
        </QueryClientProvider>
      </RouterProvider>
    </I18nProvider>
  );
}

const bodyStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: baseColors.backgroundSubdued,
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

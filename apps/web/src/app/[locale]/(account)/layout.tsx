import '@/app/app.css';

import type {Locale} from '@lingui/core';
import {RouterProvider} from '@repo/ui/providers/RouterProvider';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';

import {I18nProvider} from '@/i18n/I18nProvider';
import {
  getLocaleMessages,
  linguiConfigHelpers,
  setActiveI18nInstance,
} from '@/i18n/utils';
import {brandedTheme} from '@/themes/branded';

import {Html} from '../_components/Html';
import {PageLayout} from './_components/PageLayout';
import {QueryClientProvider} from './_providers/QueryClientProvider';

interface Params {
  readonly locale: Locale;
}

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
            <body {...stylex.props(bodyStyles.base, ...brandedTheme())}>
              <PageLayout>{children}</PageLayout>
            </body>
          </Html>
        </QueryClientProvider>
      </RouterProvider>
    </I18nProvider>
  );
}

export function generateStaticParams(): Params[] {
  return linguiConfigHelpers.supportedLocales.map(locale => ({locale}));
}

const bodyStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: baseColors.backgroundSubdued,
  },
});

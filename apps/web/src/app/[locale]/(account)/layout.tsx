import '@/app/app.css';

import type {Locale} from '@lingui/core';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';
import {Inter} from 'next/font/google';

import {I18nProvider} from '@/i18n/I18nProvider';
import {
  getLocaleMessages,
  linguiConfigHelpers,
  setActiveI18nInstance,
} from '@/i18n/utils';
import {brandedTheme} from '@/themes/branded';

import {PageLayout} from './_components/PageLayout';
import {QueryClientProvider} from './QueryClientProvider';

const inter = Inter({subsets: ['latin']});

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
    <html
      lang={locale}
      className={inter.className}
      {...stylex.props(...brandedTheme())}>
      <body {...stylex.props(bodyStyles.base)}>
        <I18nProvider locale={locale} messages={getLocaleMessages(locale)}>
          <QueryClientProvider>
            <PageLayout>{children}</PageLayout>
          </QueryClientProvider>
        </I18nProvider>
      </body>
    </html>
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

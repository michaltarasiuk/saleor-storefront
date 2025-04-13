import '@/app/app.css';

import type {Locale} from '@lingui/core';
import {Container} from '@repo/ui/Container';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import {Inter} from 'next/font/google';

import {I18nProvider} from '@/i18n/I18nProvider';
import {getMessages, i18nConfig, setI18n} from '@/i18n/utils';
import {brandedTheme} from '@/themes/branded';

import {Footer} from './_components/Footer';
import {GlobalNav} from './_components/GlobalNav';

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
  setI18n(locale);
  return (
    <html lang={locale} className={inter.className} {...brandedTheme()}>
      <body {...stylex.props(bodyStyles.base)}>
        <I18nProvider locale={locale} messages={getMessages(locale)}>
          <header {...stylex.props(headerStyles.base)}>
            <GlobalNav />
          </header>
          <Container elementType="main" style={mainStyles.base}>
            {children}
          </Container>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

export function generateStaticParams(): Params[] {
  return i18nConfig.locales.map(locale => ({locale}));
}

const bodyStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: baseColors.backgroundSubdued,
  },
});

const headerStyles = stylex.create({
  base: {
    backgroundColor: baseColors.background,
    paddingBlock: spacing.large400,
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

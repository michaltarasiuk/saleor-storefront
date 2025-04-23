'use client';

import {type Locale, type Messages, setupI18n} from '@lingui/core';
import {I18nProvider as LinguiI18nProvider} from '@lingui/react';
import {useState} from 'react';
import {I18nProvider as AriaI18nProvider} from 'react-aria-components';
import {LocalizedStringProvider} from 'react-aria-components/i18n';

interface I18nProviderProps {
  readonly children: React.ReactNode;
  readonly locale: Locale;
  readonly messages: Messages;
}

export function I18nProvider({children, locale, messages}: I18nProviderProps) {
  const [i18n] = useState(() =>
    setupI18n({
      locale,
      messages: {[locale]: messages},
    })
  );
  return (
    <LinguiI18nProvider i18n={i18n}>
      <AriaI18nProvider locale={locale}>{children}</AriaI18nProvider>
      <LocalizedStringProvider locale={locale} />
    </LinguiI18nProvider>
  );
}

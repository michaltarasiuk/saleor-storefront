'use client';

import {type Locale, type Messages, setupI18n} from '@lingui/core';
import {I18nProvider as LinguiI18nProvider} from '@lingui/react';
import {useState} from 'react';

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
  return <LinguiI18nProvider i18n={i18n}>{children}</LinguiI18nProvider>;
}

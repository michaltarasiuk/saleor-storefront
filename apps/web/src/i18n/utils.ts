import 'server-only';

import {type Locale, type Messages, setupI18n} from '@lingui/core';
import {setI18n as setLinguiI18n} from '@lingui/react/server';

import {linguiConfigHelpers} from './config';

const messagesByLocale = Object.fromEntries(
  await Promise.all(
    linguiConfigHelpers.locales.map(async locale => {
      const {messages} = await import(`./locales/${locale}/messages.po`);
      return [locale, messages as Messages] as const;
    })
  )
);

const i18nInstancesByLocale = Object.fromEntries(
  linguiConfigHelpers.locales.map(locale => [
    locale,
    setupI18n({
      locale,
      messages: {[locale]: getLocaleMessages(locale)},
    }),
  ])
);

export function getLocaleMessages(locale: Locale) {
  const messages = messagesByLocale[locale];
  if (!messages) {
    throw new Error(`No messages found for locale: ${locale}`);
  }
  return messages;
}

export function getI18nInstance(locale: Locale) {
  const i18n = i18nInstancesByLocale[locale];
  if (!i18n) {
    throw new Error(`No i18n instance found for locale: ${locale}`);
  }
  return i18n;
}

export function setActiveI18nInstance(locale: Locale) {
  const i18n = getI18nInstance(locale);
  setLinguiI18n(i18n);
  return i18n;
}

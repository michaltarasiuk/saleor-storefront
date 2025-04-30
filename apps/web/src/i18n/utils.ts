import {type Locale, type Messages, setupI18n} from '@lingui/core';
import {setI18n as setLinguiI18n} from '@lingui/react/server';
import {raise} from '@repo/utils/raise';

import {linguiConfigHelpers} from './config';

const localeMessagesByLocale = Object.fromEntries(
  await Promise.all(
    linguiConfigHelpers.locales.map(async locale => [
      locale,
      (await import(`./locales/${locale}/messages.po`)).messages as Messages,
    ])
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
  return (
    localeMessagesByLocale[locale] ??
    raise(`No messages found for locale: ${locale}`)
  );
}

export function getI18nInstance(locale: Locale) {
  return (
    i18nInstancesByLocale[locale] ??
    raise(`No i18n instance found for locale: ${locale}`)
  );
}

export function setActiveI18nInstance(locale: Locale) {
  const i18n = getI18nInstance(locale);
  setLinguiI18n(i18n);
  return i18n;
}

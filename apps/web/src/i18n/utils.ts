import {type I18n, type Locale, type Messages, setupI18n} from '@lingui/core';
import {setI18n as setLinguiI18n} from '@lingui/react/server';

import linguiConfig from '../../lingui.config';

export const linguiConfigHelpers = {
  get defaultLocale() {
    if (!linguiConfig.sourceLocale) {
      throw new Error('Default locale is not defined in Lingui config.');
    }
    return linguiConfig.sourceLocale;
  },
  get supportedLocales() {
    if (!linguiConfig.locales) {
      throw new Error('Locales are not defined in Lingui config.');
    }
    return linguiConfig.locales;
  },
};

const localeCatalogs = await Promise.all(
  linguiConfigHelpers.supportedLocales.map(async locale => {
    const catalog = await import(`./locales/${locale}/messages.po`);
    return [locale, catalog.messages as Messages] as const;
  })
);
const localeCatalogMap = Object.fromEntries(localeCatalogs);

const i18nInstancesByLocale: Record<Locale, I18n> = {};
for (const locale of linguiConfigHelpers.supportedLocales) {
  i18nInstancesByLocale[locale] = setupI18n({
    locale,
    messages: {[locale]: getLocaleMessages(locale)},
  });
}

export function getLocaleMessages(locale: Locale) {
  const messages = localeCatalogMap[locale];
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

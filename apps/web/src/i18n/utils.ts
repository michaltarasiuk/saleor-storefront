import {type I18n, type Locale, type Messages, setupI18n} from '@lingui/core';
import {setI18n as setLinguiI18n} from '@lingui/react/server';

import linguiConfig from '../../lingui.config';

export const i18nConfig = {
  get defaultLocale() {
    if (!linguiConfig.sourceLocale) {
      throw new Error('Default locale is not defined in Lingui config.');
    }
    return linguiConfig.sourceLocale;
  },
  get locales() {
    if (!linguiConfig.locales) {
      throw new Error('Locales are not defined in lingui config.');
    }
    return linguiConfig.locales;
  },
};

const catalogs = await Promise.all(
  i18nConfig.locales.map(async locale => {
    const catalog = await import(`./locales/${locale}/messages.po`);
    return [locale, catalog.messages as Messages] as const;
  })
);
const catalogsMap = Object.fromEntries(catalogs);

const i18nInstances: Record<Locale, I18n> = {};
for (const locale of i18nConfig.locales) {
  i18nInstances[locale] = setupI18n({
    locale,
    messages: {[locale]: getMessages(locale)},
  });
}

export function getMessages(locale: Locale) {
  const messages = catalogsMap[locale];
  if (!messages) {
    throw new Error(`No messages found for locale: ${locale}`);
  }
  return messages;
}

export function getI18n(locale: Locale) {
  const i18n = i18nInstances[locale];
  if (!i18n) {
    throw new Error(`No i18n instance found for locale: ${locale}`);
  }
  return i18n;
}

export function setI18n(locale: Locale) {
  const i18n = getI18n(locale);
  setLinguiI18n(i18n);
  return i18n;
}

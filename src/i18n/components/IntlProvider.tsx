import {IntlProvider as ReactIntlProvider} from '@/i18n/react-intl';
import type {PropsWithChildren} from '@/lib/types/react';

import type {AvailableLocale} from '../consts';
import {getIntl} from '../get-intl';

interface Props {
	readonly locale: AvailableLocale;
}

export async function IntlProvider({
	locale,
	children,
}: PropsWithChildren<Props>) {
	const {defaultLocale, messages} = await getIntl(locale);

	return (
		<ReactIntlProvider
			locale={locale}
			defaultLocale={defaultLocale}
			messages={messages}>
			{children}
		</ReactIntlProvider>
	);
}

import {IntlProvider} from '@/i18n/components/IntlProvider';
import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';
import {ChannelContext} from '@/i18n/context/channel-context';
import {LocaleContext} from '@/i18n/context/locale-context';
import type {PropsWithChildren} from '@/lib/types/react';

import {UrqlProvider} from '../_components/UrqlProvider';

interface Props {
	readonly channel: AvailableChannel;
	readonly locale: AvailableLocale;
}

export function Providers({
	children,
	channel,
	locale,
}: PropsWithChildren<Props>) {
	return (
		<ChannelContext.Provider value={channel}>
			<LocaleContext.Provider value={locale}>
				<IntlProvider locale={locale}>
					<UrqlProvider>{children}</UrqlProvider>
				</IntlProvider>
			</LocaleContext.Provider>
		</ChannelContext.Provider>
	);
}

import '@/styles/globals.css';
import './styles/globals.css';
import '../polyfills';

import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';
import type {PropsWithChildren} from '@/lib/types/react';
import {fontSans} from '@/styles/fonts';

import {Providers} from '../_components/Providers';
import {Toaster} from '../_components/Toaster';

interface Props {
	readonly params: {
		readonly channel: AvailableChannel;
		readonly locale: AvailableLocale;
	};
}

export default function HomeLayout({
	children,
	params: {channel, locale},
}: PropsWithChildren<Props>) {
	return (
		<html lang={locale} className={fontSans.className}>
			<body>
				<Providers channel={channel} locale={locale}>
					{children}
				</Providers>
				<Toaster expand />
			</body>
		</html>
	);
}

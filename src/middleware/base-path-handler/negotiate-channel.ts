import type {AvailableChannel, AvailableLocale} from '@/i18n/consts';
import {DEFAULT_CHANNEL} from '@/i18n/consts';
import {isAvailableChannel} from '@/i18n/tools/is-available-channel';
import {isDefined} from '@/lib/tools/is-defined';

const localeToChannel: Record<AvailableLocale, AvailableChannel> = {
	'en-US': 'default-channel',
};

export function negotiateChannel(
	locale: AvailableLocale,
	preferredChannel?: string,
): AvailableChannel {
	if (!isDefined(preferredChannel)) {
		return localeToChannel[locale];
	}
	return isAvailableChannel(preferredChannel)
		? preferredChannel
		: DEFAULT_CHANNEL;
}

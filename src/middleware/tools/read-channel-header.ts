import 'server-only';

import {headers} from 'next/headers';
import invariant from 'tiny-invariant';

import {assertAvailableChannel} from '@/i18n/tools/assert-available-channel';
import {isDefined} from '@/lib/tools/is-defined';

import {CUSTOM_REQUEST_HEADERS} from '../set-base-path-headers-handler';

export function readChannelHeader() {
	const channel = headers().get(CUSTOM_REQUEST_HEADERS.CHANNEL);
	invariant(isDefined(channel), "Channel isn't defined");
	assertAvailableChannel(channel);

	return channel;
}

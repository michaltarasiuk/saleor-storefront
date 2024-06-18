import {createServerContext, useContext} from 'react';

import type {AvailableChannel} from '../consts';
import {DEFAULT_CHANNEL} from '../consts';

export const ChannelContext = createServerContext<AvailableChannel>(
	'ChannelContext',
	DEFAULT_CHANNEL,
);

export function useChannel() {
	return useContext(ChannelContext);
}

import type {AvailableChannel} from '../consts';
import {AVAILABLE_CHANNELS} from '../consts';

export function isAvailableChannel(
	channel: string,
): channel is AvailableChannel {
	// See for type assertion: https://stackoverflow.com/a/56745484
	return (AVAILABLE_CHANNELS as readonly string[]).includes(channel);
}

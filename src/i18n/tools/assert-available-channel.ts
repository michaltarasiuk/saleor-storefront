import invariant from 'tiny-invariant';

import type {AvailableChannel} from '../consts';
import {isAvailableChannel} from './is-available-channel';

export function assertAvailableChannel(
	channel: string,
): asserts channel is AvailableChannel {
	invariant(isAvailableChannel(channel), `${channel} channel not available`);
}

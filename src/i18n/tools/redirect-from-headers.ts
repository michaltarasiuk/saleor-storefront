import 'server-only';

import {redirect} from 'next/navigation';

import {formatPathname} from '@/lib/tools/format-pathname';
import {readChannelHeader} from '@/middleware/tools/read-channel-header';
import {readLocaleHeader} from '@/middleware/tools/read-locale-header';

import type {RedirectFn} from '../types';

// https://github.com/microsoft/TypeScript/issues/52784
export const redirectFromHeaders: RedirectFn = (route, type) => {
	redirect(
		formatPathname(readChannelHeader(), readLocaleHeader(), route),
		type,
	);
};

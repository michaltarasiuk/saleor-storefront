import {redirect} from 'next/navigation';

import {formatPathname} from '@/lib/tools/format-pathname';

import {getChannel} from '../context/get-channel';
import {getLocale} from '../context/get-locale';
import type {RedirectFn} from '../types';

// https://github.com/microsoft/TypeScript/issues/52784
export const redirectFromContext: RedirectFn = (route, type) => {
	redirect(formatPathname(getChannel(), getLocale(), route), type);
};

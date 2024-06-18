'use client';

import type {LinkProps} from 'next/link';
import Link from 'next/link';
import {forwardRef} from 'react';

import {formatPathname} from '@/lib/tools/format-pathname';

import {useBasePath} from '../hooks/use-base-path';

export const IntlLink: typeof Link = forwardRef(function IntlLink(
	{href: hrefProp, ...restProps},
	ref,
) {
	const hrefIsString = typeof hrefProp === 'string';

	const pathname = `${formatPathname(...useBasePath())}${
		hrefIsString ? hrefProp : hrefProp.pathname
	}`;
	const href: LinkProps['href'] = {
		...(!hrefIsString && hrefProp),
		pathname,
	};
	return <Link ref={ref} href={href} {...restProps} />;
});

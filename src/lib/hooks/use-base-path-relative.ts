import {usePathname as usePathname_} from 'next/navigation';
import {useMemo} from 'react';

import {formatPathname} from '../tools/format-pathname';
import {splitPathname} from '../tools/split-pathname';

export function useBasePathRelative() {
	const pathname = usePathname_();

	return useMemo(
		() => formatPathname(...splitPathname(pathname).slice(2)),
		[pathname],
	);
}

import {redirect} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

const ROOT_PATHNAME = formatPathname(APP_ROUTES.ROOT);

export function goToRoot(): never {
	redirect(ROOT_PATHNAME);
}

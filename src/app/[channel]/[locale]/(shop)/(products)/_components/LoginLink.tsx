import {LockIcon} from 'lucide-react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

export function LoginLink() {
	return (
		<IntlLink
			href={formatPathname(APP_ROUTES.LOGIN)}
			className={cn(buttonStyles({variant: 'ghost', size: 'icon'}))}>
			<LockIcon className={cn('h-5 w-5')} />
		</IntlLink>
	);
}

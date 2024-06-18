import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {NavLink} from './NavLink';

export async function SidebarNav() {
	const intl = await getIntl(getLocale());

	return (
		<nav>
			<ul className={cn('flex flex-wrap gap-2 lg:flex-col')}>
				<li>
					<NavLink
						href={formatPathname(
							...APP_ROUTES.DASHBOARD.ACCOUNT.USER_DETAILS,
						)}>
						{intl.formatMessage({
							defaultMessage: 'Account',
							id: 'TwyMau',
						})}
					</NavLink>
				</li>
				<li>
					<NavLink href={formatPathname(...APP_ROUTES.ROOT)}>
						{intl.formatMessage({
							defaultMessage: 'Orders',
							id: 'X7jl6w',
						})}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

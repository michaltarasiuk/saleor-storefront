import {graphql} from '@/graphql/generated';
import {getBasePath} from '@/i18n/context/get-base-path';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {NavbarItem} from './NavbarItem';

const NavbarMenu_MenuQuery = graphql(`
	query NavbarMenu_MenuQuery(
		$channel: String
		$languageCode: LanguageCodeEnum!
	) {
		menu(name: "navbar", channel: $channel) {
			items {
				id
				...NavbarItem_MenuItemFragment
			}
		}
	}
`);

export async function NavbarMenu() {
	const {menu} = await fetchQueryData(
		NavbarMenu_MenuQuery,
		basePathToQueryVariables(...getBasePath()),
	);

	return (
		<nav className={cn('max-w-md overflow-x-scroll px-3 py-2')}>
			<ul
				className={cn(
					'flex gap-4 text-sm font-semibold sm:gap-5 md:gap-6',
				)}>
				{menu?.items?.map((item) => (
					<li key={item.id}>
						<NavbarItem menuItem={item} />
					</li>
				))}
			</ul>
		</nav>
	);
}

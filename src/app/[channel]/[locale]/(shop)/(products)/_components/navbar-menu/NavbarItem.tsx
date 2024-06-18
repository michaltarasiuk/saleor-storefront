import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';

import {NavbarDropdown} from './navbar-dropdown';
import {NavbarLink} from './NavbarLink';

const NavbarItem_MenuItemFragment = graphql(`
	fragment NavbarItem_MenuItemFragment on MenuItem {
		children {
			__typename
		}
		...NavbarLink_MenuItemFragment
		...NavbarDropdown_MenuItemFragment
	}
`);

interface Props {
	readonly menuItem: FragmentType<typeof NavbarItem_MenuItemFragment>;
}

export function NavbarItem({menuItem}: Props) {
	const item = getFragment(NavbarItem_MenuItemFragment, menuItem);

	return !item.children?.length ? (
		<NavbarLink menuItem={item} />
	) : (
		<NavbarDropdown menuItem={item} />
	);
}

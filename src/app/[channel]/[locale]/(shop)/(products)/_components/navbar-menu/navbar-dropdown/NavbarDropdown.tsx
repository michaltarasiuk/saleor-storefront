'use client';

import dynamic from 'next/dynamic';
import {useState} from 'react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';

import * as DropdownMenu from './DropdownMenu';
import {NavbarDropdownTrigger} from './NavbarDropdownTrigger';

const NavbarDropdownContent = dynamic(() =>
	import('./NavbarDropdownContent').then((mod) => mod.NavbarDropdownContent),
);

const NavbarDropdown_MenuItemFragment = graphql(`
	fragment NavbarDropdown_MenuItemFragment on MenuItem {
		...NavbarDropdownTrigger_MenuItemFragment
		...NavbarDropdownContent_MenuItemFragment
	}
`);

interface Props {
	readonly menuItem: FragmentType<typeof NavbarDropdown_MenuItemFragment>;
}

export function NavbarDropdown({menuItem}: Props) {
	const item = getFragment(NavbarDropdown_MenuItemFragment, menuItem);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownMenu.Root onOpenChange={setIsOpen}>
			<NavbarDropdownTrigger menuItem={item} />
			<DropdownMenu.Portal>
				{isOpen && <NavbarDropdownContent menuItem={item} />}
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}

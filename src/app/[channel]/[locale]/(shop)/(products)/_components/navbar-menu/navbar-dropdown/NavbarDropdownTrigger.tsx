'use client';

import {ChevronDown} from 'lucide-react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';

const NavbarDropdownTrigger_MenuItemFragment = graphql(`
	fragment NavbarDropdownTrigger_MenuItemFragment on MenuItem {
		name
		translation(languageCode: $languageCode) {
			name
		}
	}
`);

interface Props {
	readonly menuItem: FragmentType<
		typeof NavbarDropdownTrigger_MenuItemFragment
	>;
}

export function NavbarDropdownTrigger({menuItem}: Props) {
	const {name} = applyTranslation(
		getFragment(NavbarDropdownTrigger_MenuItemFragment, menuItem),
	);

	return (
		<DropdownMenu.Trigger className={cn('group flex items-center gap-0.5')}>
			<span
				className={cn(
					'transition-colors hover:text-blue group-data-[state=open]:text-blue',
				)}>
				{name}
			</span>
			<ChevronDown className={cn('h-4 w-4 text-grey')} />
		</DropdownMenu.Trigger>
	);
}

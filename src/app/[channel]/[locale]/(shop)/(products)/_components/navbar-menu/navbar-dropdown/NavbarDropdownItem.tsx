'use client';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import * as DropdownMenu from './DropdownMenu';

const NavbarDropdownItem_MenuItemFragment = graphql(`
	fragment NavbarDropdownItem_MenuItemFragment on MenuItem {
		name
		translation(languageCode: $languageCode) {
			name
		}
		category {
			slug
		}
		collection {
			slug
		}
	}
`);

interface Props {
	readonly menuItem: FragmentType<typeof NavbarDropdownItem_MenuItemFragment>;
}

export function NavbarDropdownItem({menuItem}: Props) {
	const {name, category, collection} = applyTranslation(
		getFragment(NavbarDropdownItem_MenuItemFragment, menuItem),
	);
	const slug = category?.slug ?? collection?.slug;

	return (
		isDefined(slug) && (
			<DropdownMenu.RadioItem
				value={slug}
				className={cn(
					'cursor-pointer text-center text-sm font-semibold hover:text-blue hover:outline-none hover:transition-colors',
				)}>
				{name}
			</DropdownMenu.RadioItem>
		)
	);
}

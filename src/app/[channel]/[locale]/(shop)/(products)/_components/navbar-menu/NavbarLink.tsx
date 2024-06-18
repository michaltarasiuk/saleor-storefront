import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {IntlLink} from '@/i18n/components/IntlLink';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

const NavbarLink_MenuItemFragment = graphql(`
	fragment NavbarLink_MenuItemFragment on MenuItem {
		name
		translation(languageCode: $languageCode) {
			name
		}
		page {
			slug
		}
	}
`);

interface Props {
	readonly menuItem: FragmentType<typeof NavbarLink_MenuItemFragment>;
}

export function NavbarLink({menuItem}: Props) {
	const {name, page} = applyTranslation(
		getFragment(NavbarLink_MenuItemFragment, menuItem),
	);

	return (
		page && (
			<IntlLink
				href={formatPathname(page.slug)}
				className={cn('underline-offset-4 hover:underline')}>
				{name}
			</IntlLink>
		)
	);
}

'use client';

import {useLocale} from '@/i18n/context/locale-context';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {DEFAULT_PAGE_SIZE} from '../consts';
import {FiltersDropdown} from '../filters-dropdown/FiltersDropdown';
import {FiltersDropdownContent} from '../filters-dropdown/FiltersDropdownContent';
import {FiltersDropdownTrigger} from '../filters-dropdown/FiltersDropdownTrigger';
import {CategoryDropdownItems} from './CategoryDropdownItems';

const BASE_OPTIONS = {
	defaultPageSize: DEFAULT_PAGE_SIZE,
	updateSearchParams: false,
	restoreFromUrl: false,
};

export function CategoryDropdown() {
	const languageCode = localeToLangCode(useLocale());

	const [{variablesArray}, actions] = usePaginationActions({
		queryVariables: {
			languageCode,
		},
		...BASE_OPTIONS,
	});

	return (
		<FiltersDropdown>
			<FiltersDropdownTrigger>
				<FormattedMessage defaultMessage="Category" id="ccXLVi" />
			</FiltersDropdownTrigger>
			<FiltersDropdownContent>
				{variablesArray.map((variables, idx) => (
					<CategoryDropdownItems
						key={idx}
						variables={variables}
						isLastPage={idx === variablesArray.length - 1}
						{...actions}
					/>
				))}
			</FiltersDropdownContent>
		</FiltersDropdown>
	);
}

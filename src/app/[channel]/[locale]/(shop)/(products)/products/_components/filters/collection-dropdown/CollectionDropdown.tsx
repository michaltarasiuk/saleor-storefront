'use client';

import {useBasePath} from '@/i18n/hooks/use-base-path';
import {FormattedMessage} from '@/i18n/react-intl';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {DEFAULT_PAGE_SIZE} from '../consts';
import {FiltersDropdown} from '../filters-dropdown/FiltersDropdown';
import {FiltersDropdownContent} from '../filters-dropdown/FiltersDropdownContent';
import {FiltersDropdownTrigger} from '../filters-dropdown/FiltersDropdownTrigger';
import {CollectionDropdownItems} from './CollectionDropdownItems';

const BASE_OPTIONS = {
	defaultPageSize: DEFAULT_PAGE_SIZE,
	updateSearchParams: false,
	restoreFromUrl: false,
};

export function CollectionDropdown() {
	const basePath = useBasePath();

	const [{variablesArray}, actions] = usePaginationActions({
		queryVariables: {
			...basePathToQueryVariables(...basePath),
		},
		...BASE_OPTIONS,
	});
	return (
		<FiltersDropdown>
			<FiltersDropdownTrigger>
				<FormattedMessage defaultMessage="Collection" id="phAZoj" />
			</FiltersDropdownTrigger>
			<FiltersDropdownContent>
				{variablesArray.map((variables, idx) => (
					<CollectionDropdownItems
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

import {cn} from '@/lib/tools/cn';

import {CategoryDropdown} from './category-dropdown';
import {CollectionDropdown} from './collection-dropdown';

export function Filters() {
	return (
		<nav className={cn('flex gap-2.5')}>
			<CategoryDropdown />
			<CollectionDropdown />
		</nav>
	);
}

import type {MenuCheckboxItemProps} from '@radix-ui/react-dropdown-menu';
import {Check} from 'lucide-react';

import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';

export function FiltersDropdownItem({
	children,
	className,
	...restProps
}: MenuCheckboxItemProps) {
	return (
		<DropdownMenu.CheckboxItem
			{...restProps}
			className={cn(
				'flex cursor-pointer gap-2.5 rounded-sm px-3 py-2 text-sm hover:bg-grey hover:outline-none',
				className,
			)}>
			<DropdownMenu.ItemIndicator>
				<Check className={cn('h-4 w-4')} />
			</DropdownMenu.ItemIndicator>
			{children}
		</DropdownMenu.CheckboxItem>
	);
}

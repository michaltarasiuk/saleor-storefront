import type {MenuContentProps} from '@radix-ui/react-dropdown-menu';

import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';

export function FiltersDropdownContent({
	children,
	className,
	...restProps
}: MenuContentProps) {
	return (
		<DropdownMenu.Portal>
			<DropdownMenu.Content
				sideOffset={12}
				{...restProps}
				className={cn(
					'flex max-h-64 flex-col gap-1 overflow-scroll rounded-md border border-grey bg-black bg-opacity-90 px-2 py-2 text-sm text-white shadow-lg backdrop-blur-md',
					className,
				)}>
				{children}
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	);
}

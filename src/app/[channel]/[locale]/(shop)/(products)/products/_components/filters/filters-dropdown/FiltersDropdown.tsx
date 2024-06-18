import type {DropdownMenuProps} from '@radix-ui/react-dropdown-menu';

import * as DropdownMenu from './DropdownMenu';

export function FiltersDropdown(props: DropdownMenuProps) {
	return <DropdownMenu.Root {...props} />;
}

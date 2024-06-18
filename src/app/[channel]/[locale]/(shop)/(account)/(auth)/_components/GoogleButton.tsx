import {Button} from '@/lib/components/ui/Button';
import {Icons} from '@/lib/components/ui/Icons';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function GoogleButton({children}: PropsWithChildren) {
	return (
		<Button variant="outline">
			<Icons.Google className={cn('mr-2 h-4 w-4')} />
			{children}
		</Button>
	);
}

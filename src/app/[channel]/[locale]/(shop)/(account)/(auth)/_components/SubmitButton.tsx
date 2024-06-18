import {Button} from '@/lib/components/ui/Button';
import {Spinner} from '@/lib/components/ui/Spinner';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props {
	readonly disabled: boolean;
}

export function SubmitButton({children, disabled}: PropsWithChildren<Props>) {
	return (
		<Button type="submit" disabled={disabled}>
			{disabled && (
				<span className={cn('mr-2')}>
					<Spinner />
				</span>
			)}
			{children}
		</Button>
	);
}

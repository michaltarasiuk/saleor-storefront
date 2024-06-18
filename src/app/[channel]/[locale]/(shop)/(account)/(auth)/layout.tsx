import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export default function AccountLayout({children}: PropsWithChildren) {
	return (
		<div
			className={cn('absolute inset-0 flex items-center justify-center')}>
			<main
				className={cn('flex w-full flex-col gap-4 px-2 sm:w-[350px]')}>
				{children}
			</main>
		</div>
	);
}

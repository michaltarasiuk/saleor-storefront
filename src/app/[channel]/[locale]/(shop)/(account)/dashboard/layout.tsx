import {Separator} from '@/lib/components/ui/Separator';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import {Hero} from './_components/Hero';
import {SidebarNav} from './_components/sidebar-nav';

export default function DashboardLayout({children}: PropsWithChildren) {
	return (
		<div className={cn('space-y-6 p-10')}>
			<Hero />
			<Separator />
			<div
				className={cn(
					'flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0',
				)}>
				<aside className={cn('-mx-4 lg:w-1/5')}>
					<SidebarNav />
				</aside>
				<main className={cn('flex-1 lg:max-w-2xl')}>{children}</main>
			</div>
		</div>
	);
}

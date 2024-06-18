import type {PropsWithChildren} from 'react';

import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isUserLoggedIn} from '@/lib/tools/is-user-logged-in';

import {DashboardLink} from './_components/DashboardLink';
import {LinkedLogo} from './_components/LinkedLogo';
import {LoginLink} from './_components/LoginLink';
import {NavbarMenu} from './_components/navbar-menu';
import {SearchButton} from './_components/SearchButton';
import {ShoppingCartDialog} from './_components/shopping-cart-dialog';

export default function ShopLayout({children}: PropsWithChildren) {
	return (
		<div className={cn('px-4 md:px-6')}>
			<div className={cn('mx-auto max-w-7xl')}>
				<header
					className={cn(
						'sticky top-0 flex items-center gap-2 bg-primary-foreground py-4 md:py-5',
					)}>
					<div className={cn('mr-4 sm:mr-8 md:mr-12')}>
						<LinkedLogo href={formatPathname(APP_ROUTES.ROOT)} />
					</div>
					<NavbarMenu />
					<div className={cn('ml-auto')}>
						<SearchButton />
					</div>
					<ShoppingCartDialog />
					{isUserLoggedIn() ? <DashboardLink /> : <LoginLink />}
				</header>
				{children}
				<footer className={cn('mt-4 h-96 bg-gray-100')}>
					{/* TODO */}
				</footer>
			</div>
		</div>
	);
}

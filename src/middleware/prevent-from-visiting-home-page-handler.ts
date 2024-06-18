import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {splitPathname} from '@/lib/tools/split-pathname';

import type {Handler} from './create-middleware';

export const preventFromVisitingHomePageHandler: Handler =
	function preventFromVisitingHomePage({req, EarlyReturnResponse}) {
		// Temporarily prevent from visiting home page until it's implemented
		if (splitPathname(req.nextUrl.pathname).length === 2) {
			const updatedUrl = req.nextUrl.clone();

			updatedUrl.pathname = formatPathname(
				...splitPathname(updatedUrl.pathname),
				APP_ROUTES.PRODUCTS,
			);

			EarlyReturnResponse.redirect(updatedUrl);
		}
	};

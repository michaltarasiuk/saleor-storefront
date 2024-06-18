import {APP_ROUTES} from '@/lib/consts';
import {allDefined} from '@/lib/tools/all-defined';
import {formatPathname} from '@/lib/tools/format-pathname';

type Checkout = Partial<{
	readonly shippingAddress: unknown;
	readonly deliveryMethod: unknown;
	readonly billingAddress: unknown;
}>;

export function getRedirectUrl(
	{shippingAddress, deliveryMethod, billingAddress}: Checkout,
	requestedRoute: string,
) {
	const informationRoute = formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION);
	const routes = {
		[informationRoute]: {},
		[formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)]: {
			shippingAddress,
		},
		[formatPathname(...APP_ROUTES.CHECKOUT.BILLING)]: {
			shippingAddress,
			deliveryMethod,
		},
		[formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT)]: {
			shippingAddress,
			deliveryMethod,
			billingAddress,
		},
	};

	const requestedRouteRequirements = routes[requestedRoute];
	if (!requestedRouteRequirements) return informationRoute;
	if (allDefined(...Object.values(requestedRouteRequirements))) return null;

	for (const [redirectUrl, routeRequirements] of Object.entries(
		routes,
	).toReversed()) {
		if (allDefined(...Object.values(routeRequirements))) return redirectUrl;
	}
	throw new Error('no route');
}

import {expect, test} from 'vitest';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {getRedirectUrl} from './get-redirect-url';

test('to be information route when requested route is not defined', () => {
	const redirectUrl = getRedirectUrl(
		{
			shippingAddress: {
				__typename: 'ShippingAddress',
			},
			deliveryMethod: {
				__typename: 'DeliveryMethod',
			},
			billingAddress: undefined,
		},
		'/not-defined-route',
	);
	expect(redirectUrl).toBe(
		formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION),
	);
});

test('to be null when requested route requirments are defined', () => {
	const redirectUrl = getRedirectUrl(
		{
			shippingAddress: {
				__typename: 'ShippingAddress',
			},
			deliveryMethod: {
				__typename: 'DeliveryMethod',
			},
			billingAddress: undefined,
		},
		formatPathname(...APP_ROUTES.CHECKOUT.BILLING),
	);
	expect(redirectUrl).toBeNull();
});

test('to be last route with defined requirments when requested route is not ready', () => {
	const redirectUrl = getRedirectUrl(
		{
			shippingAddress: {
				__typename: 'ShippingAddress',
			},
			deliveryMethod: undefined,
			billingAddress: undefined,
		},
		formatPathname(...APP_ROUTES.CHECKOUT.BILLING),
	);
	expect(redirectUrl).toBe(formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING));
});

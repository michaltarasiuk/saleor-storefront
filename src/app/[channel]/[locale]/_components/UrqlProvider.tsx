'use client';

import {cacheExchange} from '@urql/exchange-graphcache';
import {
	createClient,
	fetchExchange,
	ssrExchange,
	UrqlProvider as UrqlProvider_,
} from '@urql/next';
import {useMemo} from 'react';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {PropsWithChildren} from '@/lib/types/react';

export function UrqlProvider({children}: PropsWithChildren) {
	const [client, ssr] = useMemo(() => {
		const ssr = ssrExchange();

		const client = createClient({
			url: GRAPHQL_ENDPOINT,
			exchanges: [
				cacheExchange({
					keys: {
						// https://formidable.com/open-source/urql/docs/graphcache/normalized-caching/#custom-keys-and-non-keyable-entities
						Image: () => null,
						TaxedMoney: () => null,
						Money: () => null,
						ProductPricingInfo: () => null,
						TaxedMoneyRange: () => null,
					},
				}),
				ssr,
				fetchExchange,
			],
			suspense: true,
		});
		return [client, ssr];
	}, []);

	return (
		<UrqlProvider_ client={client} ssr={ssr}>
			{children}
		</UrqlProvider_>
	);
}

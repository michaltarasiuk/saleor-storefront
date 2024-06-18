import {useMemo} from 'react';

import type {CheckoutLine_CheckoutLineFragmentFragment} from '@/graphql/generated/graphql';

type Attributes =
	CheckoutLine_CheckoutLineFragmentFragment['variant']['product']['attributes'];

export function useConcatenatedAttributeValues(attributes: Attributes) {
	return useMemo(
		() =>
			attributes
				.flatMap(({values}) =>
					values.flatMap(
						({translation, name}) =>
							translation?.name ?? name ?? [],
					),
				)
				.join(' / '),
		[attributes],
	);
}

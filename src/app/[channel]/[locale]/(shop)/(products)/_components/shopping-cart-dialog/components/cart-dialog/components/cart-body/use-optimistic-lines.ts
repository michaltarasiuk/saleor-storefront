import {experimental_useOptimistic as useOptimistic} from 'react';

import type {CartBody_CheckoutFragmentFragment} from '@/graphql/generated/graphql';

type Lines = CartBody_CheckoutFragmentFragment['lines'];

export function useOptimisticLines(lines: Lines) {
	const [optimisticLines, deleteOptimisticLine] = useOptimistic<
		Lines,
		string
	>(lines, (state, id) => state.filter((line) => line.id !== id));

	return {
		optimisticLines,
		deleteOptimisticLine,
	};
}

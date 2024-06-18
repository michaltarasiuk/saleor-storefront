import {experimental_useEffectEvent as useEffectEvent, useEffect} from 'react';
import type {UnionToIntersection} from 'type-fest';

import type {PageInfo} from '@/graphql/generated/graphql';

import type {usePaginationActions} from './use-pagination-actions';

export function useHandleNextPage({
	pageInfo,
	isLastPage,
	...actions
}: {
	readonly pageInfo?: PageInfo;
	readonly isLastPage: boolean;
} & Pick<
	UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
	'onNextPage'
>) {
	const onNextPage = useEffectEvent(actions.onNextPage);

	useEffect(() => {
		if (pageInfo && isLastPage) {
			onNextPage(pageInfo);
		}
	}, [isLastPage, onNextPage, pageInfo]);
}

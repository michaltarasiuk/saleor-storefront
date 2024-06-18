import type {UnionToIntersection} from 'type-fest';

import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';

import {DEFAULT_PAGE_SIZE} from '../../_consts';
import {PageNavButton} from './PageNavButton';

const pageSizes = Array(3)
	.fill(undefined)
	.map((_, idx) => DEFAULT_PAGE_SIZE + idx * DEFAULT_PAGE_SIZE);

type Props = Pick<
	UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
	'handlePageSizeChange'
>;

export function PageSizes({handlePageSizeChange}: Props) {
	return (
		<ol className={cn('flex gap-2')}>
			{pageSizes.map((pageSize) => (
				<li key={pageSize}>
					<PageNavButton
						size="icon"
						onClick={() => handlePageSizeChange(pageSize)}>
						{pageSize}
					</PageNavButton>
				</li>
			))}
		</ol>
	);
}

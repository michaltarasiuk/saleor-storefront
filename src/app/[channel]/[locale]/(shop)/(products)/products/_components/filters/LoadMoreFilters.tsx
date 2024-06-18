import {Loader2} from 'lucide-react';
import {useTransition} from 'react';
import type {UnionToIntersection} from 'type-fest';

import {FormattedMessage} from '@/i18n/react-intl';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';

import {DEFAULT_PAGE_SIZE} from './consts';

type Props = Pick<
	UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
	'handleNextPage'
>;

export function LoadMoreFilters({handleNextPage}: Props) {
	const [pending, startTransition] = useTransition();

	return (
		<button
			disabled={pending}
			onClick={() =>
				startTransition(() => {
					handleNextPage(DEFAULT_PAGE_SIZE);
				})
			}
			className={cn(
				'flex cursor-pointer items-center justify-center rounded-sm bg-grey px-3 py-2 text-xs font-semibold shadow-inner',
			)}>
			{pending ? (
				<Loader2 className={cn('h-4 w-4 animate-spin')} />
			) : (
				<FormattedMessage defaultMessage="Load more" id="00LcfG" />
			)}
		</button>
	);
}

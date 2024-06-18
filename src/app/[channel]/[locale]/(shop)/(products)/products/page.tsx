import {Suspense} from 'react';

import {cn} from '@/lib/tools/cn';
import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';

import {Filters} from './_components/filters';
import {ProductList} from './_components/product-list';
import {getQueryVariables} from './_tools/get-query-variables';
import {getQueryVariablesKey} from './_tools/get-query-variables-key';

interface Props {
	readonly searchParams: SearchParams;
}

export default function ProductsPage({searchParams}: Props) {
	return <ProductsPage_ searchParams={searchParams} />;
}

async function ProductsPage_({searchParams: searchParamsObj}: Props) {
	const searchParams = createSearchParams(searchParamsObj);

	const queryVariables = await getQueryVariables(searchParams);
	const key = getQueryVariablesKey(queryVariables);

	return (
		<main>
			<div className={cn('mb-4 mt-2')}>
				<Filters />
			</div>
			<Suspense fallback="Loading...">
				<ProductList key={key} queryVariables={queryVariables} />
			</Suspense>
		</main>
	);
}

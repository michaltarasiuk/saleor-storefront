import {notFound} from 'next/navigation';

import {graphql} from '@/graphql/generated';
import {getBasePath} from '@/i18n/context/get-base-path';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import type {SearchParams} from '@/lib/tools/create-search-params';
import {createSearchParams} from '@/lib/tools/create-search-params';
import {fetchQueryData} from '@/lib/tools/get-client';

import {Product} from './_components/Product';

const ProductPage_ProductQuery = graphql(/* GraphQL */ `
	query ProductPage_ProductQuery(
		$slug: String!
		$channel: String
		$languageCode: LanguageCodeEnum!
	) {
		product(slug: $slug, channel: $channel) {
			__typename
			id
			...Product_ProductFragment
		}
	}
`);

interface Props {
	readonly params: {
		readonly slug: string;
	};
	readonly searchParams: SearchParams;
}

export default function ProductPage({params, searchParams}: Props) {
	return <ProductPage_ params={params} searchParams={searchParams} />;
}

async function ProductPage_({params: {slug}, searchParams}: Props) {
	const basePath = getBasePath();

	const {product} = await fetchQueryData(ProductPage_ProductQuery, {
		slug,
		...basePathToQueryVariables(...basePath),
	});
	return !product ? (
		notFound()
	) : (
		<Product
			product={product}
			searchParams={createSearchParams(searchParams)}
		/>
	);
}

import {graphql} from '@/graphql/generated';
import {getBasePath} from '@/i18n/context/get-base-path';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {ProductItem} from '../../_components/product-item';

const CategoryPage_CategoryQuery = graphql(/* GraphQL */ `
	query CategoryPage_CategoryQuery(
		$slug: String
		$channel: String
		$languageCode: LanguageCodeEnum!
	) {
		category(slug: $slug) {
			__typename
			id
			products(first: 100, channel: $channel) {
				edges {
					node {
						__typename
						id
						...ProductItem_ProductFragment
					}
				}
			}
		}
	}
`);

interface Props {
	readonly params: {
		readonly slug: string;
	};
}

export default async function CategoryPage({params}: Props) {
	return <CategoryPage_ params={params} />;
}

async function CategoryPage_({params: {slug}}: Props) {
	const {category} = await fetchQueryData(CategoryPage_CategoryQuery, {
		slug,
		...basePathToQueryVariables(...getBasePath()),
	});

	// TODO: Replace with pagination
	return (
		<ol className={cn('grid grid-cols-3 gap-x-10 gap-y-6')}>
			{category?.products?.edges.map(({node}) => (
				<ProductItem key={node.id} product={node} />
			))}
		</ol>
	);
}

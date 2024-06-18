import {graphql} from '@/graphql/generated';
import {getBasePath} from '@/i18n/context/get-base-path';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {ProductItem} from '../../_components/product-item';

const CollectionPage_CollectionQuery = graphql(/* GraphQL */ `
	query CollectionPage_CollectionQuery(
		$slug: String
		$channel: String
		$languageCode: LanguageCodeEnum!
	) {
		collection(slug: $slug, channel: $channel) {
			__typename
			id
			products(first: 100) {
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

export default async function CollectionPage({params}: Props) {
	return <CollectionPage_ params={params} />;
}

async function CollectionPage_({params: {slug}}: Props) {
	const {collection} = await fetchQueryData(CollectionPage_CollectionQuery, {
		slug,
		...basePathToQueryVariables(...getBasePath()),
	});

	// TODO: Replace with pagination
	return (
		<ol className={cn('grid grid-cols-3 gap-x-10 gap-y-6')}>
			{collection?.products?.edges.map(({node}) => (
				<ProductItem key={node.id} product={node} />
			))}
		</ol>
	);
}

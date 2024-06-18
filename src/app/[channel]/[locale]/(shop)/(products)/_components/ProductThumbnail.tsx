import Image from 'next/image';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

const ProductThumbnail_ImageFragment = graphql(/* GraphQL */ `
	fragment ProductThumbnail_ImageFragment on Image {
		__typename
		url
		alt
	}
`);

interface Props {
	readonly thumbnail: FragmentType<typeof ProductThumbnail_ImageFragment>;
}

export function ProductThumbnail({thumbnail}: Props) {
	const {url, alt} = getFragment(ProductThumbnail_ImageFragment, thumbnail);

	return (
		isDefined(alt) && (
			<div className={cn('rounded-md bg-blue-50')}>
				<Image
					src={url}
					alt={alt}
					width={4096}
					height={4096}
					className={cn('h-full w-full')}
				/>
			</div>
		)
	);
}

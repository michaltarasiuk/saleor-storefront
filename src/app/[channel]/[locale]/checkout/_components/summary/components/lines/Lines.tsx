import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';
import {cn} from '@/lib/tools/cn';

import {Line} from './line';

const Lines_CheckoutFragment = graphql(/* GraphQL */ `
	fragment Lines_CheckoutFragment on Checkout {
		lines {
			id
			...Line_CheckoutLineFragment
		}
		...Line_CheckoutFragment
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof Lines_CheckoutFragment>;
}

export function Lines({checkout}: Props) {
	const {lines, ...checkoutFragment} = getFragment(
		Lines_CheckoutFragment,
		checkout,
	);

	return (
		<ul className={cn('flex flex-col gap-4')}>
			{lines.map((checkoutLine) => {
				return (
					<li key={checkoutLine.id}>
						<Line
							checkout={checkoutFragment}
							checkoutLine={checkoutLine}
						/>
					</li>
				);
			})}
		</ul>
	);
}

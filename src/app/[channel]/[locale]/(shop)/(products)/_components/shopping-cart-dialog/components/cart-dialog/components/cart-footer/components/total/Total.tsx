import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {Cell, Table} from '@/lib/components/ui/Table';
import {cn} from '@/lib/tools/cn';

import {Money} from '../../../Money';
import {Row} from './components/Table';
import {Text} from './components/Text';

const CartTotal_CheckoutFragment = graphql(/* GraphQL */ `
	fragment CartTotal_CheckoutFragment on Checkout {
		subtotalPrice {
			currency
			net {
				amount
			}
			gross {
				amount
			}
		}
		shippingPrice {
			currency
			net {
				amount
			}
			gross {
				amount
			}
		}
		totalPrice {
			currency
			net {
				amount
			}
			gross {
				amount
			}
		}
		displayGrossPrices
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof CartTotal_CheckoutFragment>;
}

export async function CartTotal({checkout}: Props) {
	const {subtotalPrice, shippingPrice, totalPrice, displayGrossPrices} =
		getFragment(CartTotal_CheckoutFragment, checkout);

	const intl = await getIntl(getLocale());

	return (
		<Table className={cn('gap-3 pb-7 pt-4')}>
			<Row>
				<Cell>
					<Text>
						{intl.formatMessage({
							defaultMessage: 'Subtotal',
							id: 'L8seEc',
						})}
					</Text>
				</Cell>
				<Cell className={cn('justify-end')}>
					<Money
						value={
							displayGrossPrices
								? subtotalPrice.gross.amount
								: subtotalPrice.net.amount
						}
						currency={subtotalPrice.currency}
					/>
				</Cell>
			</Row>
			<Row>
				<Cell>
					<Text>
						{intl.formatMessage({
							defaultMessage: 'Shipping',
							id: 'PRlD0A',
						})}
					</Text>
				</Cell>
				<Cell className={cn('justify-end')}>
					<Money
						value={
							displayGrossPrices
								? shippingPrice.gross.amount
								: shippingPrice.net.amount
						}
						currency={shippingPrice.currency}
					/>
				</Cell>
			</Row>
			<Row>
				<Cell>
					<Text>
						{intl.formatMessage({
							defaultMessage: 'Total',
							id: 'MJ2jZQ',
						})}
					</Text>
				</Cell>
				<Cell className={cn('justify-end')}>
					<Money
						value={
							displayGrossPrices
								? totalPrice.gross.amount
								: totalPrice.net.amount
						}
						currency={totalPrice.currency}
					/>
				</Cell>
			</Row>
		</Table>
	);
}

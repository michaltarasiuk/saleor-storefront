import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {Cell, Row, Table} from '@/lib/components/ui/Table';
import {cn} from '@/lib/tools/cn';

import {Money} from '../../../Money';
import {Text} from './Text';

const CheckoutTotal_CheckoutFragment = graphql(/* GraphQL */ `
	fragment CheckoutTotal_CheckoutFragment on Checkout {
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
	readonly checkout: FragmentType<typeof CheckoutTotal_CheckoutFragment>;
}

export async function CheckoutTotal({checkout}: Props) {
	const {subtotalPrice, shippingPrice, totalPrice, displayGrossPrices} =
		getFragment(CheckoutTotal_CheckoutFragment, checkout);
	const intl = await getIntl(getLocale());

	return (
		<Table className={cn('mt-6 gap-2')}>
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
						bold
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
					<Text large>
						{intl.formatMessage({
							defaultMessage: 'Total',
							id: 'MJ2jZQ',
						})}
					</Text>
				</Cell>
				<Cell className={cn('justify-end')}>
					<abbr className={cn('mr-2 text-xs text-grey-light')}>
						{totalPrice.currency}
					</abbr>
					<Money
						value={
							displayGrossPrices
								? totalPrice.gross.amount
								: totalPrice.net.amount
						}
						currency={totalPrice.currency}
						large
						bold
					/>
				</Cell>
			</Row>
		</Table>
	);
}

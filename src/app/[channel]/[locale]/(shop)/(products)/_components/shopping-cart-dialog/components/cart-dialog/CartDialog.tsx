import {graphql} from '@/graphql/generated/gql';
import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {Dialog, DialogTrigger} from '@/lib/components/ui/Dialog';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';

import {DialogContent} from '../DialogContent';
import {EmptyCartDialog} from '../EmptyCartDialog';
import {ShoppingCartButton} from '../ShoppingCartButton';
import {CartBody} from './components/cart-body';
import {CartFooter} from './components/cart-footer';

const CartDialog_CheckoutQuery = graphql(/* GraphQL */ `
	query CartDialog_CheckoutQuery($id: ID!, $languageCode: LanguageCodeEnum!) {
		checkout(id: $id) {
			quantity
			...ShoppingCartButton_CheckoutFragment
			...CartBody_CheckoutFragment
			...CartFooter_CheckoutFragment
		}
	}
`);

interface Props {
	readonly id: string;
}

export async function CartDialog({id}: Props) {
	const checkout =
		(
			await fetchQueryData(
				CartDialog_CheckoutQuery,
				{
					id,
					languageCode: localeToLangCode(getLocale()),
				},
				{
					fetchOptions: {
						cache: 'no-cache',
					},
				},
			)
		).checkout ?? raise('`checkout` is not defined');

	if (checkout.quantity) {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<ShoppingCartButton checkout={checkout} />
				</DialogTrigger>
				<DialogContent>
					<div className={cn('flex h-full flex-col justify-between')}>
						<CartBody checkout={checkout} />
						<CartFooter checkout={checkout} />
					</div>
				</DialogContent>
			</Dialog>
		);
	}
	return <EmptyCartDialog />;
}

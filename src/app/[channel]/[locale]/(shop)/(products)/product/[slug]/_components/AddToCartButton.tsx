'use client';

import {useRouter} from 'next/navigation';

import {useBasePath} from '@/i18n/hooks/use-base-path';
import {FormattedMessage} from '@/i18n/react-intl';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import {Button} from '@/lib/components/ui/Button';
import {isDefined} from '@/lib/tools/is-defined';
import {addCheckoutLineAction} from '@/modules/checkout/tools/add-checkout-line-action';

interface Props {
	readonly variantId: string | undefined | null;
}

export function AddToCartButton({variantId}: Props) {
	const {channel, languageCode} = basePathToQueryVariables(...useBasePath());
	const router = useRouter();

	return (
		<Button
			variant="outline"
			disabled={!isDefined(variantId)}
			onClick={async () => {
				if (isDefined(variantId)) {
					await addCheckoutLineAction({
						line: {quantity: 1, variantId},
						channel,
						languageCode,
					});
					router.refresh();
				}
			}}>
			<FormattedMessage defaultMessage="Add to cart" id="ADKef8" />
		</Button>
	);
}

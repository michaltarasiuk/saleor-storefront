import {FormattedNumber} from '../react-intl';

interface Props {
	readonly value: number;
	readonly currency: string;
}

export function FormattedPrice({value, currency}: Props) {
	return (
		<FormattedNumber
			value={value}
			currency={currency}
			style="currency"
			currencyDisplay="narrowSymbol"
		/>
	);
}

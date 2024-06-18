import {cn} from '@/lib/tools/cn';

interface Props {
	readonly value: number;
}

export function Quantity({value}: Props) {
	return (
		<div
			className={cn(
				'flex h-5 w-5 items-center justify-center rounded-full bg-subdued',
			)}>
			<p className={cn('text-xs font-medium')}>{value}</p>
		</div>
	);
}

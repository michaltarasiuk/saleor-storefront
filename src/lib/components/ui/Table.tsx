import type {HTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

type TableProps = Omit<HTMLAttributes<HTMLDivElement>, 'role'>;

export function Table({
	children,
	className,
	...restProps
}: PropsWithChildren<TableProps>) {
	return (
		<div
			role="table"
			className={cn('flex flex-col', className)}
			{...restProps}>
			{children}
		</div>
	);
}

type RowProps = Omit<HTMLAttributes<HTMLDivElement>, 'role'>;

export function Row({
	children,
	className,
	...restProps
}: PropsWithChildren<RowProps>) {
	return (
		<div role="row" className={cn('flex', className)} {...restProps}>
			{children}
		</div>
	);
}

type CellProps = Omit<HTMLAttributes<HTMLDivElement>, 'role'>;

export function Cell({
	children,
	className,
	...restProps
}: PropsWithChildren<CellProps>) {
	return (
		<div
			role="cell"
			className={cn('flex flex-1 items-center', className)}
			{...restProps}>
			{children}
		</div>
	);
}

import type {ReactNode} from 'react';

export type PropsWithChildren<Props = unknown> = Props & {
	readonly children: ReactNode;
};

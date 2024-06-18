import {toast as toast_} from 'sonner';

import type {ToasterProps} from '../Toaster';
import {Toaster} from '../Toaster';

type Props = Omit<ToasterProps, 'variant' | 'onClose'>;

export const toast = {
	default: (props) => {
		toast_.custom((id) => (
			<Toaster
				variant="default"
				onClose={() => {
					toast_.dismiss(id);
				}}
				{...props}
			/>
		));
	},
	destructive: (props) => {
		toast_.custom((id) => (
			<Toaster
				variant="destructive"
				onClose={() => {
					toast_.dismiss(id);
				}}
				{...props}
			/>
		));
	},
} satisfies Record<ToasterProps['variant'], (props: Props) => void>;

import type {ButtonProps} from '@/lib/components/ui/Button';
import {Button} from '@/lib/components/ui/Button';

type Props = Omit<ButtonProps, 'variant'>;

export function PageNavButton(props: Props) {
	return <Button {...props} variant="neutral" />;
}

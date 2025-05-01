import {Grid} from '@repo/ui/Grid';

import {setActiveI18nInstance} from '@/i18n/utils';

import type {Params} from '../../../params';
import {Order} from './_components/Order';

interface ConfirmedOrdersPageProps {
  readonly params: Promise<Params>;
}

export default async function ConfirmedOrdersPage({
  params,
}: ConfirmedOrdersPageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <Grid columns={['fill', 'fill', 'fill']} spacing="loose">
      <Order />
      <Order />
      <Order />
    </Grid>
  );
}

import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

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
    <div {...stylex.props(ordersStyles.base)}>
      <Order />
      <Order />
      <Order />
    </div>
  );
}

const ordersStyles = stylex.create({
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: spacing.large200,
  },
});

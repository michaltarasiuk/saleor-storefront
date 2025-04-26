import {Trans} from '@lingui/react/macro';
import {Heading, HeadingGroup} from '@repo/ui/Heading';
import {InlineStack} from '@repo/ui/Stack';
import * as stylex from '@stylexjs/stylex';

import {setActiveI18nInstance} from '@/i18n/utils';

import type {Params} from '../../params';
import {OrdersView, OrdersViewToggle} from './_components/OrdersViewToggle';
import {OrderTabs} from './_components/OrderTabs';

interface OrdersLayoutProps {
  readonly confirmed: React.ReactNode;
  readonly pending: React.ReactNode;
  readonly params: Promise<Params>;
}

export default async function OrdersLayout({
  confirmed,
  pending,
  params,
}: OrdersLayoutProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <OrdersView>
      <InlineStack blockAligment="center" padding={['none', 'loose']}>
        <Heading>
          <Trans>Orders</Trans>
        </Heading>
        <div {...stylex.props(ordersViewToggleStyles.base)}>
          <OrdersViewToggle />
        </div>
      </InlineStack>
      <HeadingGroup>
        <OrderTabs confirmedTab={confirmed} pendingTab={pending} />
      </HeadingGroup>
    </OrdersView>
  );
}

const ordersViewToggleStyles = stylex.create({
  base: {
    marginInlineStart: 'auto',
  },
});

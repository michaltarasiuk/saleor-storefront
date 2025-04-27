'use client';

import {useLingui} from '@lingui/react/macro';
import {GridIcon} from '@repo/ui/icons/GridIcon';
import {ListIcon} from '@repo/ui/icons/ListIcon';
import {
  ToggleIconButton,
  ToggleIconButtonGroup,
} from '@repo/ui/ToggleIconButtonGroup';
import type * as stylex from '@stylexjs/stylex';
import {createContext, use, useState} from 'react';

type OrdersViewType = 'grid' | 'list';

const OrdersViewContext = createContext<{
  viewType: OrdersViewType;
  setViewType?: React.Dispatch<React.SetStateAction<OrdersViewType>>;
}>({
  viewType: 'grid',
});

export function OrdersView({children}: {readonly children: React.ReactNode}) {
  const [viewType, setViewType] = useState<OrdersViewType>('grid');
  return (
    <OrdersViewContext value={{viewType, setViewType}}>
      {children}
    </OrdersViewContext>
  );
}

interface OrdersViewToggleProps {
  readonly style: stylex.StyleXStyles;
}

export function OrdersViewToggle(props: OrdersViewToggleProps) {
  const {viewType, setViewType} = use(OrdersViewContext);
  const {t} = useLingui();
  return (
    <ToggleIconButtonGroup
      aria-label={t`Orders View Toggle`}
      selectionMode="single"
      selectedKeys={[viewType]}
      onSelectionChange={([newViewType]) => {
        if (newViewType) {
          setViewType?.(newViewType as OrdersViewType);
        }
      }}
      {...props}>
      <ToggleIconButton
        aria-label={t`Grid View`}
        id={'grid' satisfies OrdersViewType}
        isSelected={viewType === 'grid'}>
        <GridIcon aria-hidden="true" />
      </ToggleIconButton>
      <ToggleIconButton
        aria-label={t`List View`}
        id={'list' satisfies OrdersViewType}
        isSelected={viewType === 'list'}>
        <ListIcon aria-hidden="true" />
      </ToggleIconButton>
    </ToggleIconButtonGroup>
  );
}

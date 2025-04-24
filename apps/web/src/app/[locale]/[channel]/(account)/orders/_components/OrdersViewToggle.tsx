'use client';

import {useLingui} from '@lingui/react/macro';
import {GridIcon} from '@repo/ui/icons/GridIcon';
import {ListIcon} from '@repo/ui/icons/ListIcon';
import {ToggleButton, ToggleButtonGroup} from '@repo/ui/ToggleButtonGroup';
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

export function OrdersViewToggle() {
  const {viewType, setViewType} = use(OrdersViewContext);
  const {t} = useLingui();
  return (
    <ToggleButtonGroup
      aria-label={t`Orders View Toggle`}
      selectionMode="single"
      selectedKeys={[viewType]}
      onSelectionChange={([newViewType]) => {
        if (newViewType) {
          setViewType?.(newViewType as OrdersViewType);
        }
      }}>
      <ToggleButton
        aria-label={t`Grid View`}
        id={'grid' satisfies OrdersViewType}
        isSelected={viewType === 'grid'}>
        <GridIcon aria-hidden="true" />
      </ToggleButton>
      <ToggleButton
        aria-label={t`List View`}
        id={'list' satisfies OrdersViewType}
        isSelected={viewType === 'list'}>
        <ListIcon aria-hidden="true" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

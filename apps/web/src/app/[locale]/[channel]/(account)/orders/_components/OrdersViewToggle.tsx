'use client';

import {useLingui} from '@lingui/react/macro';
import {
  MediaQueryConditions,
  type MediaQuerySizes,
} from '@repo/ui/consts/media-query';
import {useMediaQuery} from '@repo/ui/hooks/use-media-query';
import {GridIcon} from '@repo/ui/icons/GridIcon';
import {ListIcon} from '@repo/ui/icons/ListIcon';
import {ToggleButton, ToggleButtonGroup} from '@repo/ui/ToggleButtonGroup';
import * as stylex from '@stylexjs/stylex';
import {createContext, use, useEffect, useState} from 'react';

type OrdersViewType = 'grid' | 'table';

export const OrdersViewContext = createContext<{
  viewType: OrdersViewType;
  setViewType?: React.Dispatch<React.SetStateAction<OrdersViewType>>;
}>({
  viewType: 'grid',
});

export function OrdersView({children}: {readonly children: React.ReactNode}) {
  const [viewType, setViewType] = useState<OrdersViewType>('grid');
  const isMediumUpMedia = useMediaQuery(MediaQueryConditions.medium);
  useEffect(() => {
    if (!isMediumUpMedia && viewType === 'table') {
      setViewType('grid');
    }
  }, [isMediumUpMedia, viewType]);
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
      }}
      style={styles.base}>
      <ToggleButton
        aria-label={t`Grid View`}
        id={'grid' satisfies OrdersViewType}
        icon={GridIcon}
      />
      <ToggleButton
        aria-label={t`Table View`}
        id={'table' satisfies OrdersViewType}
        icon={ListIcon}
      />
    </ToggleButtonGroup>
  );
}

const styles = stylex.create({
  base: {
    marginInlineStart: 'auto',
    display: {
      default: 'none',
      ['@media (width >= 48rem)' satisfies MediaQuerySizes['medium']]:
        'inherit',
    },
  },
});

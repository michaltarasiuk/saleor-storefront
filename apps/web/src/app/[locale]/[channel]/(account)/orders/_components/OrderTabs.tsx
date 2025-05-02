'use client';

import {useLingui} from '@lingui/react/macro';
import type {Breakpoints} from '@repo/ui/consts/breakpoints';
import {ClockIcon} from '@repo/ui/icons/ClockIcon';
import {OrderBoxIcon} from '@repo/ui/icons/OrderBoxIcon';
import {Tab, TabList, TabPanel, Tabs} from '@repo/ui/Tabs';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';
import {useId, useState} from 'react';
import type {Key} from 'react-aria-components';

interface OrderTabsProps {
  readonly confirmedTab: React.ReactNode;
  readonly pendingTab: React.ReactNode;
}

export function OrderTabs({confirmedTab, pendingTab}: OrderTabsProps) {
  const confirmedTabId = useId();
  const pendingTabId = useId();
  const [selectedTab, setSelectedTab] = useState<Key>(confirmedTabId);
  const {t} = useLingui();
  return (
    <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
      <TabList aria-label={t`Order Tabs`}>
        <Tab id={confirmedTabId} title={t`Confirmed`}>
          {({isSelected}) => (
            <OrderBoxIcon
              aria-hidden="true"
              stroke={isSelected ? baseColors.accent : baseColors.textSubdued}
              {...stylex.props(tabIconStyles.base)}
            />
          )}
        </Tab>
        <Tab id={pendingTabId} title={t`Pending`}>
          {({isSelected}) => (
            <ClockIcon
              aria-hidden="true"
              fill={isSelected ? baseColors.accent : baseColors.textSubdued}
              {...stylex.props(tabIconStyles.base)}
            />
          )}
        </Tab>
      </TabList>
      <TabPanel id={confirmedTabId}>{confirmedTab}</TabPanel>
      <TabPanel id={pendingTabId}>{pendingTab}</TabPanel>
    </Tabs>
  );
}

const tabIconStyles = stylex.create({
  base: {
    height: '18px',
    display: {
      default: 'none',
      ['@media (width >= 40rem)' satisfies Breakpoints['Sm']]: 'inline',
    },
    flexShrink: 0,
  },
});

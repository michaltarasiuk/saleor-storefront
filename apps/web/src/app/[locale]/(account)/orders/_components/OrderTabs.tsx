'use client';

import {Trans} from '@lingui/react/macro';
import {ClockIcon} from '@repo/ui/icons/ClockIcon';
import {OrderBoxIcon} from '@repo/ui/icons/OrderBoxIcon';
import {Tab, TabList, TabPanel, Tabs} from '@repo/ui/Tabs';
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
  return (
    <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab}>
      <TabList aria-label="Order Tabs">
        <Tab
          id={confirmedTabId}
          icon={({color}) => <OrderBoxIcon aria-hidden="true" stroke={color} />}
          isSelected={selectedTab === confirmedTabId}>
          <Trans>Confirmed</Trans>
        </Tab>
        <Tab
          id={pendingTabId}
          icon={({color}) => <ClockIcon aria-hidden="true" fill={color} />}
          isSelected={selectedTab === pendingTabId}>
          <Trans>Pending</Trans>
        </Tab>
      </TabList>
      <TabPanel id={confirmedTabId}>{confirmedTab}</TabPanel>
      <TabPanel id={pendingTabId}>{pendingTab}</TabPanel>
    </Tabs>
  );
}

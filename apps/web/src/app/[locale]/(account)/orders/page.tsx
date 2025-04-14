import type {Locale} from '@lingui/core';
import {Trans} from '@lingui/react/macro';
import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

import {setActiveI18nInstance} from '@/i18n/utils';

import {PageTitle} from '../_components/PageTitle';

interface OrdersPageProps {
  readonly params: Promise<{
    readonly locale: Locale;
  }>;
}

export default async function OrdersPage({params}: OrdersPageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <>
      <PageTitle>
        <Trans>Orders</Trans>
      </PageTitle>
      <TabGroup />
    </>
  );
}

function TabGroup() {
  return <div {...stylex.props(tabGroupStyles.base)}></div>;
}

const tabGroupStyles = stylex.create({
  base: {
    backgroundColor: baseColors.background,
    padding: spacing.large300,
  },
});

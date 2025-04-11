import {baseColors} from '@repo/ui/variables/colors.stylex';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

import {PageTitle} from '../_components/PageTitle';

export default function OrdersPage() {
  return (
    <>
      <PageTitle>Orders</PageTitle>
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

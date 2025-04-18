'use client';

import * as Slot from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  Tabs as AriaTabs,
} from 'react-aria-components';

import {Breakpoints} from './types/breakpoints';
import {baseColors} from './variables/colors.stylex';
import {
  cornerRadius,
  spacing,
  typographyPrimary,
} from './variables/tokens.stylex';

export {TabPanel} from 'react-aria-components';

export function Tabs(props: React.ComponentProps<typeof AriaTabs>) {
  return (
    <AriaTabs {...stylex.props(tabsStyles.base)} {...props}>
      {props.children}
    </AriaTabs>
  );
}

const tabsStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.large300,
  },
});

export function TabList(props: React.ComponentProps<typeof AriaTabList>) {
  return (
    <AriaTabList {...stylex.props(tabListStyles.base)} {...props}>
      {props.children}
    </AriaTabList>
  );
}

const tabListStyles = stylex.create({
  base: {
    display: 'flex',
    gap: spacing.base,
    backgroundColor: baseColors.background,
    padding: spacing.large300,
    borderRadius: cornerRadius.large,
  },
});

interface TabProps extends React.ComponentProps<typeof AriaTab> {
  readonly children: string;
  readonly isSelected: boolean;
  readonly icon: (props: {readonly color: string}) => React.ReactNode;
}

export function Tab({isSelected, ...props}: TabProps) {
  return (
    <AriaTab
      {...stylex.props(tabStyles.base, isSelected && tabStyles.selected)}
      {...props}>
      <span {...stylex.props(tabIconStyles.wrapper)}>
        <Slot.Root {...stylex.props(tabIconStyles.base)}>
          {props.icon({
            color: isSelected ? baseColors.accent : baseColors.textSubdued,
          })}
        </Slot.Root>
      </span>
      <span data-text={props.children} {...stylex.props(tabStyles.content)}>
        {props.children}
      </span>
    </AriaTab>
  );
}

const tabStyles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.small300,
    paddingBlock: spacing.base,
    paddingInline: spacing.large200,
    color: baseColors.textSubdued,
    fontFamily: typographyPrimary.fontFamily,
    fontSize: typographyPrimary.base,
    fontWeight: typographyPrimary.base,
    cursor: 'pointer',
    borderRadius: cornerRadius.base,
  },
  content: {
    display: 'inline-flex',
    flexDirection: 'column',
    '::after': {
      content: 'attr(data-text) / ""',
      fontWeight: typographyPrimary.bold,
      height: 0,
      visibility: 'hidden',
      overflow: 'hidden',
    },
  },
  selected: {
    color: baseColors.accent,
    backgroundColor: baseColors.backgroundSubdued,
    fontWeight: typographyPrimary.bold,
  },
});

const tabIconStyles = stylex.create({
  base: {
    display: {
      default: 'none',
      ['@media (width >= 40rem)' satisfies Breakpoints['Sm']]: 'inline',
    },
    flexShrink: 0,
  },
  wrapper: {
    height: '18px',
  },
});

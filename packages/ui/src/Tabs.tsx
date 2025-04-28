'use client';

import * as stylex from '@stylexjs/stylex';
import type {
  TabListProps,
  TabProps as AriaTabProps,
  TabsProps,
} from 'react-aria-components';
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  Tabs as AriaTabs,
} from 'react-aria-components';

import type {Breakpoints} from './types/breakpoints';
import {baseColors, controlColors} from './variables/colors.stylex';
import {
  borderWidth,
  cornerRadius,
  spacing,
  typographyPrimary,
} from './variables/tokens.stylex';

export {TabPanel} from 'react-aria-components';

export function Tabs(props: TabsProps) {
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

export function TabList<T extends object>(props: TabListProps<T>) {
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

interface TabProps extends AriaTabProps {
  readonly children: string;
  readonly icon: (props: React.ComponentProps<'svg'>) => React.JSX.Element;
}

export function Tab({children, icon: Icon, ...props}: TabProps) {
  return (
    <AriaTab
      className={({isFocusVisible, isSelected}) => {
        const {className = ''} = stylex.props(
          tabStyles.base,
          isFocusVisible && tabStyles.focusVisible,
          isSelected && tabStyles.selected
        );
        return className;
      }}
      {...props}>
      <Icon aria-hidden="true" {...stylex.props(tabIconStyles.base)} />
      <span data-text={children} {...stylex.props(tabStyles.content)}>
        {children}
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
    borderRadius: cornerRadius.base,
    cursor: 'pointer',
    outline: 'none',
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
  focusVisible: {
    outlineColor: controlColors.accent,
    outlineOffset: spacing.small600,
    outlineStyle: 'solid',
    outlineWidth: borderWidth.medium,
  },
});

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

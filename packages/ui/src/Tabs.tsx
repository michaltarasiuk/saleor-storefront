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

export function TabList<T extends Record<PropertyKey, unknown>>(
  props: TabListProps<T>
) {
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
  readonly title: string;
}

export function Tab({title, children, ...props}: TabProps) {
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
      {props => (
        <>
          {typeof children === 'function' ? children(props) : children}
          <span data-text={title} {...stylex.props(tabStyles.content)}>
            {title}
          </span>
        </>
      )}
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

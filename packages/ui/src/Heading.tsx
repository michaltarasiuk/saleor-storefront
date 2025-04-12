'use client';

import {isKeyOf} from '@repo/utils/is-keyof';
import * as stylex from '@stylexjs/stylex';
import {createContext, useContext} from 'react';
import {Heading as AriaHeading} from 'react-aria-components';

import {baseColors} from './variables/colors.stylex';
import {
  typographyFontSize,
  typographyPrimary,
  typographySecondary,
} from './variables/tokens.stylex';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const MinHeadingLevel: HeadingLevel = 1;
const MaxHeadingLevel: HeadingLevel = 6;

const headingLevelContext = createContext<HeadingLevel>(MinHeadingLevel);

export function HeadingGroup({children}: {readonly children: React.ReactNode}) {
  const headingLevel = useContext(headingLevelContext);
  return (
    <headingLevelContext.Provider
      value={Math.max(headingLevel + 1, MaxHeadingLevel) as HeadingLevel}>
      {children}
    </headingLevelContext.Provider>
  );
}

interface HeadingProps {
  readonly children: React.ReactNode;
  readonly accessibilityRole?: 'presentation';
  readonly inlineAlignment?: keyof typeof inlineAlignmentStyles;
  readonly level?: HeadingLevel;
}

export function Heading({
  children,
  accessibilityRole,
  inlineAlignment = 'start',
  level: staticHeadingLevel,
}: HeadingProps) {
  const headingLevel = useContext(headingLevelContext);
  return (
    <AriaHeading
      role={accessibilityRole}
      level={staticHeadingLevel ?? headingLevel}
      {...stylex.props(
        styles.base,
        inlineAlignmentStyles[inlineAlignment],
        isKeyOf(levelStyles, headingLevel) && levelStyles[headingLevel]
      )}>
      {children}
    </AriaHeading>
  );
}

const styles = stylex.create({
  base: {
    color: baseColors.text,
    fontFamily: typographyPrimary.fontFamily,
    fontSize: typographyFontSize.base,
    fontWeight: typographySecondary.bold,
    lineHeight: '120%',
  },
});

const inlineAlignmentStyles = stylex.create({
  start: {
    textAlign: 'start',
  },
  center: {
    textAlign: 'center',
  },
  end: {
    textAlign: 'end',
  },
});

const levelStyles = stylex.create({
  1: {
    fontFamily: typographySecondary.fontFamily,
    fontSize: typographyFontSize.extraLarge,
  },
  2: {
    fontFamily: typographySecondary.fontFamily,
    fontSize: typographyFontSize.medium,
  },
});

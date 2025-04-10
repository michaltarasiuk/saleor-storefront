'use client';

import * as stylex from '@stylexjs/stylex';
import {createContext, useContext} from 'react';

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
  readonly level?: HeadingLevel;
  readonly inlineAlignment?: keyof typeof inlineAlignmentStyles;
}

export function Heading({
  children,
  level: staticHeadingLevel,
  inlineAlignment = 'start',
}: HeadingProps) {
  const headingLevel = useContext(headingLevelContext);
  const Tag = `h${staticHeadingLevel ?? headingLevel}` as const;
  return (
    <Tag
      {...stylex.props(
        styles.base,
        inlineAlignmentStyles[inlineAlignment],
        headingLevel in levelStyles &&
          levelStyles[headingLevel as keyof typeof levelStyles]
      )}>
      {children}
    </Tag>
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

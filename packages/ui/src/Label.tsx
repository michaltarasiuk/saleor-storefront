import * as stylex from '@stylexjs/stylex';
import {Label as AriaLabel} from 'react-aria-components';

import {type Apperance, apperanceStyles} from './styles/apperance';
import {type Emphasis, emphasisStyles} from './styles/emphasis';
import {type FontSize, fontSizeStyles} from './styles/font-size';
import {leadingStyles} from './styles/leading';
import {typographyPrimary} from './variables/tokens.stylex';

interface LabelProps {
  readonly children: React.ReactNode;
  readonly size?: FontSize;
  readonly appearance?: Apperance;
  readonly emphasis?: Emphasis;
}

export function Label({
  children,
  appearance = 'default',
  size = 'base',
  emphasis = 'base',
}: LabelProps) {
  return (
    <AriaLabel
      {...stylex.props(
        styles.base,
        leadingStyles.extraSmall,
        apperanceStyles[appearance],
        fontSizeStyles[size],
        emphasisStyles[emphasis]
      )}>
      {children}
    </AriaLabel>
  );
}

const styles = stylex.create({
  base: {
    fontFamily: typographyPrimary.fontFamily,
    fontWeight: typographyPrimary.base,
  },
});

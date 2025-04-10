import * as stylex from '@stylexjs/stylex';

import {baseColors} from './variables/colors.stylex';
import {cornerRadius, spacing} from './variables/tokens.stylex';

interface CardProps {
  readonly children: React.ReactNode;
  readonly padding?: boolean;
}

export function Card({children, padding = true}: CardProps) {
  return (
    <div {...stylex.props(styles.base, padding && styles.padding)}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '10px',
    backgroundColor: baseColors.background,
    borderRadius: cornerRadius.large,
  },
  padding: {
    padding: spacing.large200,
  },
});

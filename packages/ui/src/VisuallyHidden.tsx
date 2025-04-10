import * as Slot from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';

import {borderWidth} from './variables/tokens.stylex';

export function VisuallyHidden({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <Slot.Root {...stylex.props(styles.base)}>{children}</Slot.Root>;
}

const styles = stylex.create({
  base: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: borderWidth.none,
  },
});

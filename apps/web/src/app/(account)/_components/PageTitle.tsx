import {Heading} from '@repo/ui/Heading';
import {spacing} from '@repo/ui/variables/tokens.stylex';
import * as stylex from '@stylexjs/stylex';

export function PageTitle({children}: {readonly children: React.ReactNode}) {
  return (
    <div {...stylex.props(styles.base)}>
      <Heading>{children}</Heading>
    </div>
  );
}

const styles = stylex.create({
  base: {
    paddingBlock: spacing.large300,
  },
});

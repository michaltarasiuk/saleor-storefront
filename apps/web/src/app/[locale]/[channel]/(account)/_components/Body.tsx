import {baseColors} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';

import {brandedTheme} from '@/themes/branded';

export function Body({children}: {readonly children: React.ReactNode}) {
  return (
    <body {...stylex.props(bodyStyles.base, ...brandedTheme())}>
      {children}
    </body>
  );
}

const bodyStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: baseColors.backgroundSubdued,
  },
});

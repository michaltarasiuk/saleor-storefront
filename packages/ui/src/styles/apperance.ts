import * as stylex from '@stylexjs/stylex';

import {
  baseColors,
  criticalColors,
  infoColors,
  successColors,
  warningColors,
} from '../variables/colors.stylex';

export type Apperance = keyof typeof apperanceStyles;

export const apperanceStyles = stylex.create({
  default: {
    color: baseColors.text,
  },
  subdued: {
    color: baseColors.textSubdued,
  },
  accent: {
    color: baseColors.accent,
  },
  critical: {
    color: criticalColors.critical,
  },
  info: {
    color: infoColors.info,
  },
  warning: {
    color: warningColors.warning,
  },
  success: {
    color: successColors.success,
  },
  decoative: {
    color: baseColors.decorative,
  },
});

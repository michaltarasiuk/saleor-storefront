import {raise} from '@repo/utils/raise';

import linguiConfig from '../../lingui.config';

export const linguiConfigHelpers = {
  get defaultLocale() {
    return (
      linguiConfig.sourceLocale ??
      raise('The default locale is not defined in the Lingui configuration.')
    );
  },
  get locales() {
    return (
      linguiConfig.locales ??
      raise('No locales are defined in the Lingui configuration.')
    );
  },
};

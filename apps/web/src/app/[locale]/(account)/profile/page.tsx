import type {Locale} from '@lingui/core';
import {Trans} from '@lingui/react/macro';

import {setActiveI18nInstance} from '@/i18n/utils';

import {PageTitle} from '../_components/PageTitle';

interface ProfilePageProps {
  readonly params: Promise<{
    readonly locale: Locale;
  }>;
}

export default async function ProfilePage({params}: ProfilePageProps) {
  const {locale} = await params;
  setActiveI18nInstance(locale);
  return (
    <>
      <PageTitle>
        <Trans>Profile</Trans>
      </PageTitle>
    </>
  );
}

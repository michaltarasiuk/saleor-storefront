import type {Locale} from '@lingui/core';
import {Trans} from '@lingui/react/macro';

import {setI18n} from '@/i18n/utils';

import {PageTitle} from '../_components/PageTitle';

interface ProfilePageProps {
  readonly params: Promise<{
    readonly locale: Locale;
  }>;
}

export default async function ProfilePage({params}: ProfilePageProps) {
  const {locale} = await params;
  setI18n(locale);
  return (
    <>
      <PageTitle>
        <Trans>Profile</Trans>
      </PageTitle>
    </>
  );
}

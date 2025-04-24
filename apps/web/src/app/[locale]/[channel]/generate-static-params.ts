import {gql} from 'graphql-request';

import {env} from '@/env';
import {client} from '@/graphql/client';
import type {
  ChannelsQuery,
  ChannelsQueryVariables,
} from '@/graphql/codegen/graphql';
import {linguiConfigHelpers} from '@/i18n/utils';

export interface Params {
  readonly locale: string;
  readonly channel: string;
}

const {supportedLocales} = linguiConfigHelpers;

export async function generateStaticParams(): Promise<Params[]> {
  const {channels} = await client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request<
      ChannelsQuery,
      ChannelsQueryVariables
    >(ChannelsQueryDocumentString);

  const activeChannels = channels?.filter(channel => channel.isActive) ?? [];
  const params = supportedLocales.reduce<Params[]>((acc, locale) => {
    const localeParams = activeChannels.map(channel => ({
      locale,
      channel: channel.slug,
    }));
    return acc.concat(localeParams);
  }, []);

  return params;
}

const ChannelsQueryDocumentString = gql`
  query Channels {
    channels {
      slug
      isActive
    }
  }
`;

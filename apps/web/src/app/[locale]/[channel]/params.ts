import {gql} from 'graphql-request';

import {env} from '@/env';
import {client} from '@/graphql/client';
import type {
  ChannelsQuery,
  ChannelsQueryVariables,
} from '@/graphql/codegen/graphql';
import {linguiConfigHelpers} from '@/i18n/utils';

export interface Params extends Record<string, string> {
  readonly locale: string;
  readonly channel: string;
}

const {locales} = linguiConfigHelpers;

export async function generateStaticParams() {
  const channels = await Array.fromAsync(getActiveChannels());

  const params: Params[] = [];
  for (const locale of locales) {
    for (const channel of channels) {
      params.push({locale, channel});
    }
  }
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

async function* getActiveChannels() {
  const {channels} = await client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request<
      ChannelsQuery,
      ChannelsQueryVariables
    >(ChannelsQueryDocumentString);

  for (const channel of channels ?? []) {
    if (channel.isActive) {
      yield channel.slug;
    }
  }
}

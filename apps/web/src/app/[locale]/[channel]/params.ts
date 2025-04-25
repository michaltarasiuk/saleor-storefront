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

const {locales} = linguiConfigHelpers;

export async function generateStaticParams(): Promise<Params[]> {
  const params: Params[] = [];
  for await (const channel of getActiveChannels()) {
    params.push(...locales.map(locale => ({locale, channel: channel.slug})));
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
      yield channel;
    }
  }
}

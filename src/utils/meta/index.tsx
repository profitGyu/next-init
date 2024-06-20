import type { Metadata } from 'next';

const defaultMetaTag = {
  metadataBase: new URL('https://allfabric.kr'),

  openGraph: {
    type: 'website',

  },

  twitter: {
    creator: '@onefabric',
  },
} satisfies Metadata;

export const metaTag = (params?: Partial<Metadata> & { images?: string }): Metadata => {
  const paramsInTitle = 'naepyeon-front';
  const title = 'naepyeon-front';
  const description = 'naepyeon-front';
  const icons = 'naepyeon-front';
  const images = '/favicon.ico';

  const shareParams = {
    title,
    description,
  };

  return {
    ...defaultMetaTag,
    ...shareParams,
    icons,

    openGraph: {
      ...defaultMetaTag.openGraph,
      ...shareParams,
      images,
    },
    twitter: {
      ...defaultMetaTag.twitter,
      ...shareParams,
      images,
    },
  };
};
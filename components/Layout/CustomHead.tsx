import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

export const WEBSITE_HOST_URL = 'https://guessoum.dev';

const CustomHead = ({ customMeta }) => {
  const router = useRouter();

  const meta = {
    title: 'Blog - Guessoum.dev',
    description:
      "Adnene Guessoum's blogfolio, software developer, France, Orly (94).",
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta
  };

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="bohztiUsi3bAqBnVShtRLpWetJZoOyIZoJ1P7qlIUkU"
      />
      <title>{meta.title}</title>
      <link rel="icon" href="https://guessoum.dev/images/site-preview.png" />

      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:site_name" content="guessoum.dev" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={`${meta.image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GuessoumAdnene" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${meta.image}`} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
};

export default CustomHead;

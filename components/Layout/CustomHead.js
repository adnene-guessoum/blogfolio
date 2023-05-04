import Head from 'next/head';
import React from 'react';

export const WEBSITE_HOST_URL = 'https://adnene-dev.vercel.app/';

const CustomHead = ({ customMeta, router }) => {
  const meta = {
    title: 'Blogfolio - Adnene Guessoum',
    description:
      "Blog et portfolio d'Adnene Guessoum, développeur web fullstack, basé à Orly (94).",
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta
  };

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:site_name" content="adnene.dev" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GuessoumAdnene" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
};

export default CustomHead;

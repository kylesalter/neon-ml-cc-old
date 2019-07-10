import favicon from '@assets/img/favicon.png';
import ogImage from '@assets/img/og.png';
import { SiteConfig } from '@config';
import React from 'react';
import Helmet from 'react-helmet';

export interface HeadProps {
  metadata: {
    title: string;
    siteUrl: string;
    description: string;
  };
}

const Head: React.FC<HeadProps> = ({ metadata }: HeadProps) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={SiteConfig.siteKeywords} />
    <meta
      name="google-site-verification"
      content={SiteConfig.googleVerification}
    />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${SiteConfig.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={SiteConfig.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${SiteConfig.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={SiteConfig.twitterHandle} />
    <meta name="twitter:creator" content={SiteConfig.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${SiteConfig.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <meta name="theme-color" content={SiteConfig.bgColor} />
  </Helmet>
);
export default Head;

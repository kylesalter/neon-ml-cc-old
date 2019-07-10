/* eslint-disable @typescript-eslint/no-var-requires */
const siteConfig = require('./src/config/site');

/* eslint-enable */

module.exports = {
  siteMetadata: {
    title: siteConfig.siteTitle,
    siteUrl: siteConfig.siteUrl,
    description: siteConfig.siteDescription,
    author: siteConfig.name,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@api': 'src/api',
          '@components': 'src/components',
          '@config': 'src/config',
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@redux': 'src/redux',
          '@sagas': 'src/sagas',
          '@state': 'src/state',
          '@theme': 'src/theme',
          '@styles': 'src/theme/styles',
          '@metrics': 'src/theme/metrics',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: siteConfig.fonts,
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'engyn-web',
        short_name: 'engyn',
        start_url: '/',
        background_color: siteConfig.bgColor,
        theme_color: siteConfig.themeColor,
        display: 'standalone',
        icon: 'src/assets/img/favicon.png',
        cache_busting_mode: 'name',
      },
    },
    'gatsby-plugin-offline',
  ],
};

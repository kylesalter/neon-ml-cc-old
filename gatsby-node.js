/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
/* eslint-enable */

const setNullLoaders = ({ actions: { setWebpackConfig }, loaders }) => {
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /scrollreveal/,
          use: loaders.null(),
        },
        {
          test: /animejs/,
          use: loaders.null(),
        },
        {
          test: /svg.js/,
          use: loaders.null(),
        },
      ],
    },
  });
};

const addSass = ({ actions, stage, loaders, plugins }) => {
  console.log(plugins);
  const { setWebpackConfig } = actions;
  const PRODUCTION = stage !== `develop`;
  const isSSR = stage.includes(`html`);

  const sassLoader = {
    loader: require.resolve(`sass-loader`),
    options: {
      sourceMap: !PRODUCTION,
    },
  };

  const sassRule = {
    test: /\.s(a|c)ss$/,
    use: isSSR
      ? [loaders.null()]
      : [
          loaders.miniCssExtract(),
          loaders.css({ importLoaders: 2 }),
          loaders.postcss(),
          sassLoader,
        ],
  };
  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      loaders.css({ modules: true, importLoaders: 2 }),
      loaders.postcss(),
      sassLoader,
    ].filter(Boolean),
  };

  const rules = [
    {
      oneOf: [sassRuleModules, sassRule],
    },
  ];

  setWebpackConfig({
    devtool: 'source-map',
    module: {
      rules,
    },
    plugins: [
      ...plugins,
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  });
};
const addAliases = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@redux': path.resolve(__dirname, 'src/redux'),
        '@sagas': path.resolve(__dirname, 'src/sagas'),
        '@state': path.resolve(__dirname, 'src/state'),
      },
    },
  });
};

exports.onCreateWebpackConfig = props => {
  const { stage } = props;
  if (stage === 'build-html') {
    setNullLoaders(props);
  }
  // addSassExtractLoader(props);

  addAliases(props);
};

const redirects = [
  { from: '/discord', to: 'https://discord.gg/XafZ3ZM' },
  {
    from: '/market',
    to:
      'https://docs.google.com/spreadsheets/d/1U5a7bMPuVRVEDjxOQML_Oq_q1GBsDQXWFBu01kD6zpghttps://discord.gg/XafZ3ZM',
  },
  {
    from: '/price-check-guide',
    to:
      'https://docs.google.com/spreadsheets/d/13arzuRizakKuCCyFsuSD9w4F48v8Yj48ZTL_fPrsuTI',
  },
  {
    from: '/bossing',
    to:
      'https://docs.google.com/spreadsheets/d/1o0jZaUZ1QbYLfZgieKGPqwG05KkZjSAVGsn7jeKBORw/edit?usp=sharing',
  },
  {
    from: '/monster-cards',
    to:
      'https://docs.google.com/spreadsheets/d/1gw_j5srMS2Zl0c1iFNYLjN--2IzI75UihsZlv5orPGs/edit?usp=sharing',
  },
];

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      toPath: to,
      statusCode: '301',
      force: true,
    });
  });
};

import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable */
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} theme="neon-dark">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
          rel="stylesheet"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
          rel="stylesheet"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
/* eslint-enable */

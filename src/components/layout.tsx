/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { StaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationAlert from 'react-notification-alert';

import Themer from '@components/Themer';

import Head from './head';
import Loader from './loader';
import NeonNavBar from './neon-navbar.tsx';
import Sidebar from './sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}

interface LoadingProps {
  isLoading: boolean;
  render: () => React.ReactNode;
  children: React.ReactNode;
  location: any;
}

const Loading: React.FC<LoadingProps> = ({
  isLoading,
  render,
  children,
}: LoadingProps) => {
  if (isLoading) {
    return render();
  }
  return <div>{children}</div>;
};

const renderLoader: React.ReactNode = (onLoad: Function) => (
  <Loader onLoad={onLoad} />
);

const Layout: React.FC<LayoutProps> = ({ children, location }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const loader = (): React.ReactNode => renderLoader(() => setIsLoading(false));

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <Themer>
          <div>
            <Head metadata={site.siteMetadata}></Head>
            <Loading isLoading={isLoading} render={loader}>
              <div className="wrapper">
                <div className="rna-container">
                  <NotificationAlert />
                </div>
                <Sidebar location={location} />
                <div className="main-panel">
                  <NeonNavBar location={location} />
                  {children}
                </div>
              </div>
            </Loading>
          </div>
        </Themer>
      )}
    />
  );
};

export default Layout;

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import loaderAnimation from './animations/loader';
import Logo1 from './icons/logo-1';
import Logo2 from './icons/logo-2';

const Logo = Logo2;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const LogoWrapper1 = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #K {
      opacity: 0;
    }
  }
`;
const LogoWrapper2 = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => (props.isMounted ? 0 : 1)};
  svg {
    padding-left: 1px;
    padding-right: 1px;
    padding-top: 1px;
    padding-bottom: 1px;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #K {
      opacity: 1;
    }
  }
`;

export interface LoaderProps {
  onLoad(): void;
}

const Loader1: React.FC<LoaderProps> = ({ onLoad }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    loaderAnimation(onLoad);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <LogoWrapper1 isMounted={isMounted}>
        <Logo1 />
      </LogoWrapper1>
    </LoaderContainer>
  );
};

const Loader2: React.FC<LoaderProps> = ({ onLoad }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      onLoad();
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <LoaderContainer className="loader">
      <Helmet
        bodyAttributes={{ class: `hidden` }}
        className={classNames({ endz: isMounted, endscale: isMounted })}
      />

      <LogoWrapper2 isMounted={isMounted}>
        <Logo2 />
      </LogoWrapper2>
    </LoaderContainer>
  );
};

export default Loader2;

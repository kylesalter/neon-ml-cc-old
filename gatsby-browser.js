import 'sanitize.css/sanitize.css';
import '@assets/sass/main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import createStore from './src/state/createStore';

export const wrapRootElement = ({ element }) => {
  const { store } = createStore();
  return <Provider store={store}>{element}</Provider>;
};

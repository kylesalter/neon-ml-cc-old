import React, { Children } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Themes } from '@config';
import { ThemerState } from '@redux/themer';

export interface ThemerProps extends ThemerState {
  themeName: string;
  children: Children;
}

const Themer: React.FC<ThemerProps> = ({ children }: ThemerProps) => {
  return <ThemeProvider theme={Themes['neon-dark']}>{children}</ThemeProvider>;
};

export default Themer;

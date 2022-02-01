import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';
import GlobalStyles from './global';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Theme.propTypes = { children: PropTypes.instanceOf(Object).isRequired };

export default Theme;

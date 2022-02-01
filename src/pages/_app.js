import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

App.propTypes = { Component: PropTypes.instanceOf(Object).isRequired };
App.propTypes = { pageProps: PropTypes.instanceOf(Object).isRequired };

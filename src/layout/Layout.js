import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Container from './LayoutStyle';

const Layout = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
);

Layout.propTypes = { children: PropTypes.instanceOf(Object).isRequired };

export default Layout;

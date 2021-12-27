import React from 'react';
import Head from 'next/head';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

// Styles
import * as Styled from 'styles/layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Test web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>
      {/*<Footer/>*/}
    </>
  )
}

export default Layout;


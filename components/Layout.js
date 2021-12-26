import React from 'react';
import Head from 'next/head';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Test web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout;


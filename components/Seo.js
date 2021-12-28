import React from "react";
import Head from "next/head";

const SEO = ({ title = "App name" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Complete description of the content showed in this sample page."/>
      <meta property="og:title" content="My Sample Page"/>
      <meta property="og:description" content="Complete description of the content showed in this sample page for Open Graph."/>
      <meta property="og:image" content="/favicon.ico"/>
      <meta property="og:url" content="https://mydomain.com/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:locale" content="language"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;

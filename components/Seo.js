import React from "react";
import Head from "next/head";

const SEO = ({ title = "App name" }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;

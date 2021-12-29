import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({ title = "App name", color = null }) => {
  const { locales, pathname, query } = useRouter();
  const { uid } = query;
  const path = pathname.replace("[uid]", uid);

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Complete description of the content showed in this sample page."
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Complete description of the content showed in this sample page for Open Graph."
      />
      <meta property="og:image" content="/favicon.ico" />
      <meta property="og:url" content="https://mydomain.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="language" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico"></link>
      {color && <meta name="theme-color" content={color} />}

      {locales.map((node) => {
        const siteUrl = "https://ispo.com.ua/";
        const hrefLang = siteUrl + node + path;

        return (
          <link key={node} rel="alternate" hrefLang={node} href={hrefLang} />
        );
      })}
    </Head>
  );
};

export default SEO;

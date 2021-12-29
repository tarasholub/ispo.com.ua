import Link from "next/link";
import * as prismic from "@prismicio/client";

// Components
import Layout from "components/Layout";

const Custom404 = ({ settings}) => {
  const { data: settingsData } = settings || {};

  return (
    <Layout title="Page not found" settings={settingsData}>
      <h1>Custom 404</h1>
      <Link href={"/"}>Link to Homepage</Link>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const settings = await client.getByUID("site_settings", "site-values", {
    lang: locale,
  });

  return {
    props: {
      settings: settings || [],
    },
  };
}

export default Custom404;

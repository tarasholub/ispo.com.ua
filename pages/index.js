import { useEffect, useState } from "react";
import Link from "next/link";
import * as prismic from "@prismicio/client";

// Components
import Layout from "components/Layout";

const Home = ({ settings }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const { data: settingsData } = settings || {};

  return (
    <Layout title="Homepage" settings={settingsData}>
      <h1>Homepage</h1>
      <Link href={"/lecturers"}>Link to Lecturers page</Link>
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

export default Home;

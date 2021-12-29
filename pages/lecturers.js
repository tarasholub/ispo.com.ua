import { useEffect, useState } from "react";
import * as prismic from "@prismicio/client";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";

// Components
import Layout from "components/Layout";

// Styles
import * as Styled from "styles/lecturers.styled";

const Lecturers = ({ lecturers, settings }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { locale } = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const { data: settingsData } = settings || {};

  return (
    <Layout title="Lecturers page" settings={settingsData}>
      <h1>Lecturers page</h1>
      <Styled.LecturersList>
        {lecturers.map((lecturer) => {
          const { id, uid, data: lecturerData } = lecturer;
          const { title } = lecturerData;

          return (
            <li key={id}>
              <div>{RichText.asText(title)}</div>
              <Link href={`/${locale}/lecturers/${uid}`}>Read more</Link>
            </li>
          );
        })}
      </Styled.LecturersList>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType("lecturer", { lang: locale });
  const settings = await client.getByUID("site_settings", "site-values", {
    lang: locale,
  });

  return {
    props: {
      lecturers: lecturers || [],
      settings: settings || [],
    },
  };
}

export default Lecturers;

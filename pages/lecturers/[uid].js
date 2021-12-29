import { useEffect, useState } from "react";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

// Components
import Layout from "components/Layout";

// Styles
import * as Styled from "styles/lecturer.styled";

const Lecturer = ({ lecturer, settings }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const { data: settingsData } = settings || {};
  const { data: lecturerData } = lecturer || {};
  const { title, description, main_image: mainImage } = lecturerData || {};
  const { url, alt } = mainImage || {};

  return (
    <Layout title={RichText.asText(title)} settings={settingsData}>
      <Styled.LecturerWrapper>
        {title && RichText.render(title)}
        {url && <Image src={url} alt={alt} width={500} height={500} />}
        {title && RichText.render(description)}
      </Styled.LecturerWrapper>
    </Layout>
  );
};

export async function getStaticProps({ params, locale }) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturer = await client.getByUID("lecturer", params.uid, {
    lang: locale,
  });
  const settings = await client.getByUID("site_settings", "site-values", {
    lang: locale,
  });

  return {
    props: {
      lecturer: lecturer || {},
      settings: settings || [],
    },
  };
}

export async function getStaticPaths() {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType("lecturer");

  return {
    paths: lecturers?.map((node) => `/lecturers/${node.uid}`) || [],
    fallback: true,
  };
}

export default Lecturer;

import { useEffect, useState } from "react";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

// Components
import Layout from "components/Layout";

// Styles
import * as Styled from "styles/lecturer.styled";

const Lecturer = ({ lecturer }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const { data: lecturerData } = lecturer;
  const { title, description, main_image: mainImage } = lecturerData;
  const { url, alt } = mainImage;

  return (
    <Layout title={RichText.asText(title)}>
      <Styled.LecturerWrapper>
        <RichText render={title} />
        <Image src={url} alt={alt} width={500} height={500} />
        <RichText render={description} />
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

  return {
    props: {
      lecturer: lecturer || {},
    },
  };
}

export async function getStaticPaths({ locale }) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType("lecturer", { lang: locale });

  return {
    paths: lecturers?.map((node) => `/lecturers/${node.uid}`) || [],
    fallback: true,
  };
}

export default Lecturer;

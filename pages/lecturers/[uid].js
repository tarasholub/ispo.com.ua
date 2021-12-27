import * as prismic from '@prismicio/client';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Layout from 'components/Layout';

// Styles
import * as Styled from 'styles/lecturer.styled';

export async function getStaticProps({params, locale}) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturer = await client.getByUID('lecturer', params.uid, {lang: locale});

  return {
    props: {
      lecturer: lecturer || {}
    }
  }
}

export async function getStaticPaths({locale}) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType('lecturer', {lang: locale});

  return {
    paths: lecturers?.map(node => `/lecturers/${node.uid}`) || [],
    fallback: true,
  }
}

const Lecturer = ({ lecturer }) => {
  if (!lecturer) {
    console.log('loading...');
    return <span>loading...</span>;
  }

  const {data: lecturerData} = lecturer || {};
  const {title, description, main_image: mainImage} = lecturerData || {};
  const {url, alt} = mainImage || {};

  return (
    <Layout>
      <Styled.LecturerWrapper>
        {title && RichText.render(title)}
        {mainImage && <Image src={url} alt={alt} width={500} height={500}/>}
        {description && RichText.render(description)}
      </Styled.LecturerWrapper>
    </Layout>
  )
};

export default Lecturer;
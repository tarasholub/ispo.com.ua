import * as prismic from '@prismicio/client';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';
import {useRouter} from 'next/router';

// Components
import Layout from 'components/Layout';

// Styles
import * as Styled from 'styles/lecturer.styled';

export async function getStaticProps({params}) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturer = await client.getByUID('lecturer', params.uid);

  return {
    props: {
      lecturer: lecturer || {}
    }
  }
}

export async function getStaticPaths() {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType('lecturer');

  return {
    paths: lecturers?.map(node => `/lecturers/${node.uid}`) || [],
    fallback: true,
  }
}

const Lecturer = ({ lecturer }) => {
  const router = useRouter();
  const {data: lecturerData} = lecturer;
  const {title, description} = lecturerData;

  return (
    <Layout>
      <Styled.LecturerWrapper>
        {RichText.render(title)}
        <hr/>
        {RichText.render(description)}
      </Styled.LecturerWrapper>
    </Layout>
  )
};

export default Lecturer;
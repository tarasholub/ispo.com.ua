import * as prismic from '@prismicio/client';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';

// Components
import Layout from 'components/Layout';

// Styles
import * as Styled from 'styles/lecturers.styled';

export async function getStaticProps() {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType('lecturer');

  return {
    props: {
      lecturers
    }
  }
}

const Lecturers = ({lecturers}) => {
  return (
    <Layout>
      <h1>Lecturers page</h1>
      <Styled.LecturersList>
        {lecturers.map(lecturer => {
          const {id, uid, data: lecturerData} = lecturer;
          const {title} = lecturerData;

          return (
            <li key={id}>
              <div>{RichText.asText(title)}</div>
              <Link href={`/lecturers/${uid}`}>Read more</Link>
            </li>
          )
        })}
      </Styled.LecturersList>
    </Layout>
  )
}

export default Lecturers;
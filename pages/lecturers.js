import * as prismic from '@prismicio/client';
import Link from 'next/link';
import {RichText} from 'prismic-reactjs';
import {useRouter} from 'next/router';

// Components
import Layout from 'components/Layout';

// Styles
import * as Styled from 'styles/lecturers.styled';

export async function getStaticProps({locale}) {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const lecturers = await client.getAllByType('lecturer', {lang: locale});

  return {
    props: {
      lecturers: lecturers || []
    }
  }
}

const Lecturers = ({lecturers}) => {
  const {locale} = useRouter();

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
              <Link href={`/${locale}/lecturers/${uid}`}>Read more</Link>
            </li>
          )
        })}
      </Styled.LecturersList>
    </Layout>
  )
}

export default Lecturers;
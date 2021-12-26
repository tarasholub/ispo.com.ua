import * as prismic from '@prismicio/client';
import {RichText} from 'prismic-reactjs';

// Components
import Layout from 'components/Layout';

export async function getStaticProps() {
  const endpoint = prismic.getEndpoint(process.env.PRISMIC_ENDPOINT);
  const client = prismic.createClient(endpoint);
  const data = await client.getRepository();
  console.log(data);

  return {
    props: {
      data
    }
  }
}

const Lecturers = () => {
  return (
    <Layout>
      Lecturers page
    </Layout>
  )
}

export default Lecturers;
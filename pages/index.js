import Link from 'next/link';
import { useRouter } from 'next/router';

// Components
import Layout from 'components/Layout';

const Home = () => {
  const {locale} = useRouter();
  return (
    <Layout>
      Home page
      <Link href={"/lecturers"} locale={locale}>Link to Lecturers page</Link>
    </Layout>
  )
}

export default Home;

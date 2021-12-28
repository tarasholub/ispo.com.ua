import Link from 'next/link';

// Components
import Layout from 'components/Layout';

const Custom404 = () => {
  return (
    <Layout title='Page not found'>
      <h1>Custom 404</h1>
      <Link href={"/"}>Link to Homepage</Link>
    </Layout>
  )
}

export default Custom404;

import { useEffect, useState } from "react";
import Link from "next/link";

// Components
import Layout from "components/Layout";

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Layout title="Homepage">
      <h1>Homepage</h1>
      <Link href={"/lecturers"}>Link to Lecturers page</Link>
    </Layout>
  );
};

export default Home;

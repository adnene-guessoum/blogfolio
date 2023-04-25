import Head from 'next/head';
import Layout from '../components/Layout/main';
import '../styles/globals.css';

function Blogfolio({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Head>
        <title>Adnene Guessoum - Blogfolio</title>
      </Head>
      <div className="container">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Layout>
  );
}

export default Blogfolio;

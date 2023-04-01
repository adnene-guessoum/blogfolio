import Head from 'next/head';

function Blogfolio({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adnene Guessoum - Blogfolio</title>
      </Head>
      <div className="container">
        <main>
          <Component {...pageProps} />;
        </main>
      </div>
    </>
  );
}

export default Blogfolio;

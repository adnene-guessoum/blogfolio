import Layout from '../components/Layout/main';
import '../styles/globals.css';

function Blogfolio({ Component, pageProps, customMeta, router }) {
  if (router.pathname.includes('/blog/')) {
    return (
      <main>
        <Component {...pageProps} />
      </main>
    );
  }

  return (
    <Layout customMeta={customMeta} router={router}>
      <div className="container">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Layout>
  );
}

export default Blogfolio;

import Layout from '../components/Layout/main';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function Blogfolio({ Component, pageProps, router }) {
  const isBlogPost = router.pathname.includes('/blog/');

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {isBlogPost ? (
        <main>
          <Component {...pageProps} />
        </main>
      ) : (
        <Layout customMeta={pageProps.customMeta}>
          <div className="container">
            <main>
              <Component {...pageProps} />
            </main>
          </div>
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default Blogfolio;

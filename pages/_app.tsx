import Layout from '../components/Layout/main';
import { ThemeProvider } from 'next-themes';
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
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Layout customMeta={customMeta}>
        <div className="container">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default Blogfolio;

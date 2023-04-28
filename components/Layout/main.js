import Head from 'next/head';
import Navbar from '../Navbar';

const MainLayout = ({ children, router }) => {
  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blogfolio - Adnene Guessoum </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <main className="flex justify-center main pt-10 m-4 border border-slate-600">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

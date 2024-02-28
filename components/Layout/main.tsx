import Navbar from '../Navbar';
import CustomHead from './CustomHead';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

export const WEBSITE_HOST_URL = 'https://adnene-dev.vercel.app/';

const MainLayout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <div className="flex md:flex-row flex-col justify-center">
      <CustomHead customMeta={customMeta} />
      <div className="hidden md:flex lg:w-1/4 md:w-1/3 w-full">
        <Navbar />
      </div>
      <div className="bg-gray-50 dark:bg-ivory-black flex flex-col justify-center">
        <div className="md:hidden dark:bg-black flex w-full">
          <Navbar />
          <hr />
        </div>
        <main className="flex md:flex-row flex-col justify-center main w-full">
          {children}
        </main>
        <footer className="sticky top-[100vh] flex justify-center footer p-4 border border-slate-600">
          copyleft 2023 - Adnene Guessoum
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;

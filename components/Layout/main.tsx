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
    <div className="layout min-h-screen bg-gray-50 dark:bg-ivory-black">
      <CustomHead customMeta={customMeta} />
      <Navbar />
      <main className="flex justify-center main pt-10 m-4">{children}</main>
      <footer className="sticky top-[100vh] flex justify-center footer p-4 border border-slate-600">
        copyleft 2023 - Adnene Guessoum
      </footer>
    </div>
  );
};

export default MainLayout;

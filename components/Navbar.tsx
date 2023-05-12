import Link from 'next/link';
import { useRouter } from 'next/router';
import Avatar from '../components/Nav/Avatar';
import Banner from '../components/Nav/Banner';
import ThemeToggle from '../components/Nav/ThemeToggle';

const Navbar = () => {
  const router = useRouter();

  let banner;
  if (router.pathname === '/') {
    banner = <Banner />;
  } else {
    banner = null;
  }

  return (
    <>
      {banner}
      <nav
        id="navRef"
        className="flex flex-col sm:flex-row justify-around nav py-4 px-6 items-center"
      >
        <Avatar />

        <div className="flex items-center gap-4 lg:gap-8 mt-4 sm:mt-0">
          <Link href="/#navRef" passHref legacyBehavior>
            <a className="nav-link underline underline-offset-4">Accueil</a>
          </Link>

          <Link href="/blog" passHref legacyBehavior>
            <a className="nav-link underline underline-offset-4">Blog</a>
          </Link>

          <Link href="/portfolio" passHref legacyBehavior>
            <a className="nav-link underline underline-offset-4">Portfolio</a>
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

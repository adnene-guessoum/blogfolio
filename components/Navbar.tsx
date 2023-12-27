import Link from 'next/link';
import Avatar from '../components/Nav/Avatar';
//import Banner from '../components/Nav/Banner';
import ThemeToggle from '../components/Nav/ThemeToggle';
import MenuToggle from '../components/Nav/MenuToggle';

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-around nav py-4 px-6 items-center">
        <Avatar />

        <div className="flex justify-center gap-4 lg:gap-8 mt-4 sm:mt-0">
          <MenuToggle />
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 mt-4 sm:mt-0">
            <Link href="/#navRef" passHref legacyBehavior>
              <a className="nav-link underline underline-offset-4">Accueil</a>
            </Link>

            <Link href="/blog" passHref legacyBehavior>
              <a className="nav-link underline underline-offset-4">Blog</a>
            </Link>

            <Link href="/extra" passHref legacyBehavior>
              <a className="nav-link underline underline-offset-4">Extra</a>
            </Link>

            <Link href="/portfolio" passHref legacyBehavior>
              <a className="nav-link underline underline-offset-4">Projets</a>
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

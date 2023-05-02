import Link from 'next/link';
import Avatar from '../components/Nav/Avatar';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-around nav py-4 px-6 items-center">
      <Avatar />

      <div className="flex items-center gap-8 mt-4 sm:mt-0">
        <Link href="/" passHref legacyBehavior>
          <a className="nav-link hover:text-teal-500 underline underline-offset-4">
            Accueil
          </a>
        </Link>

        <Link href="/blog" passHref legacyBehavior>
          <a className="nav-link hover:text-teal-500 underline underline-offset-4">
            Blog
          </a>
        </Link>

        <Link href="/portfolio" passHref legacyBehavior>
          <a className="nav-link hover:text-teal-500 underline underline-offset-4">
            Portfolio
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

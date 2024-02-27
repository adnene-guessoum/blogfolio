import Link from 'next/link';
import Avatar from '../components/Nav/Avatar';
import MenuToggle from '../components/Nav/MenuToggle';
import Bio from '../components/Bio';
import Contact from '../components/Contact';

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 h-screen w-1/4">
      <Avatar />
      <MenuToggle />
      <div
        className="flex flex-col justify-center item-center"
        data-testid="accueil"
      >
        <Bio />
        <Contact />
      </div>
      <div className="flex flex-col h-full justify-center items-center">
        <Link href="/#navRef" passHref legacyBehavior>
          <a className="">Accueil</a>
        </Link>

        <Link href="/blog" passHref legacyBehavior>
          <a className="">Blog</a>
        </Link>

        <Link href="/extra" passHref legacyBehavior>
          <a className="">Extra</a>
        </Link>

        <Link href="/portfolio" passHref legacyBehavior>
          <a className="">Projets</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

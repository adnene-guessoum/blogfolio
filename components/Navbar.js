import Link from 'next/link';
import Avatar from '../components/Nav/Avatar';

const Navbar = () => {
  return (
    <nav className=" flex justify-between nav p-4">
      <Avatar />

      <Link href="/" passHref>
        <h2 className="nav-link">Accueil</h2>
      </Link>

      <Link href="/blog" passHref>
        <h2 className="nav-link">Blog</h2>
      </Link>

      <Link href="/portfolio" passHref>
        <h2 className="nav-link">Portfolio</h2>
      </Link>
    </nav>
  );
};

export default Navbar;

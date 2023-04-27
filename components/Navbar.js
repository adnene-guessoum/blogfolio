import MyLink from '../components/general/Link';
import Avatar from '../components/Nav/Avatar';

const Navbar = () => {
  return (
    <nav className="flex justify-around nav p-4 items-center">
      <Avatar />

      <div className="flex items-center gap-8">
        <MyLink href="/">Accueil</MyLink>

        <MyLink href="/blog">Blog</MyLink>

        <MyLink href="/portfolio">Portfolio</MyLink>
      </div>
    </nav>
  );
};

export default Navbar;

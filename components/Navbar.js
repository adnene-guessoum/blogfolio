import MyLink from '../components/general/Link';
import Avatar from '../components/Nav/Avatar';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-around nav py-4 px-6 items-center">
      <Avatar />

      <div className="flex items-center gap-8 mt-4 sm:mt-0">
        <MyLink href="/">Accueil</MyLink>

        <MyLink href="/blog">Blog</MyLink>

        <MyLink href="/portfolio">Portfolio</MyLink>
      </div>
    </nav>
  );
};

export default Navbar;

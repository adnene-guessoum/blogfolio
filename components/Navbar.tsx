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
    </nav>
  );
};

export default Navbar;

import Avatar from '../components/Nav/Avatar';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import IndexNav from '../components/Nav/IndexNav';
import VoxelOwl from '../components/voxel-owl';

const Navbar = () => {
  return (
    <nav className="with-scrollbar-light dark:with-scrollbar-dark flex lg:flex-col gap-4 h-screen w-1/4 sticky overflow-scroll top-0 p-4 border border-slate-600">
      <Avatar />
      <div className="hidden lg:flex">
        <VoxelOwl />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2
          data-testid="index-title"
          className="subtitle font-serif font-bold shadow-sm mb-4"
        >
          Bienvenue sur mon blog
        </h2>
        <IndexNav />
      </div>
      <div
        className="flex lg:flex-col justify-center item-center"
        data-testid="accueil"
      >
        <Bio />
        <Contact />
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import Avatar from '../components/Nav/Avatar';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import IndexNav from '../components/Nav/IndexNav';
import VoxelOwl from '../components/voxel-owl';

const Navbar = () => {
  // if show box clicked, show description and contact info. done to gain space
  // when Navbar on top on small screens.
  const [isFolded, setIsFolded] = useState(false);

  const toggle = () => {
    setIsFolded(!isFolded);
  };

  return (
    <nav className="md:with-scrollbar-light md:dark:with-scrollbar-dark flex flex-col md:gap-4 justify-around md:justify-start w-full md:sticky md:top-0 md:h-screen md:overflow-auto overflow-y-scroll no-scrollbar p-4 md:border-0 border-b md:border-slate-600">
      <Avatar />
      <div className="hidden lg:flex">
        <VoxelOwl />
      </div>
      <div className="mt-20 md:mt-0 flex flex-col md:justify-center items-center">
        <h2
          data-testid="index-title"
          className="subtitle font-serif font-bold shadow-sm mb-4 mt-2"
        >
          Welcome to my blog :
        </h2>
        <IndexNav />
      </div>
      <button
        onClick={toggle}
        className=" md:hidden bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        {isFolded ? 'Hide' : 'About me'}
      </button>
      {isFolded && (
        <div className="" data-testid="accueil">
          <Bio />
          <Contact />
        </div>
      )}
      <div
        className="hidden md:flex md:flex-col md:justify-center md:item-center"
        data-testid="accueil"
      >
        <Bio />
        <Contact />
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const MenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex sm:hidden flex-col items-center gap-4">
      <button
        className="flex items-center px-3 py-2 w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800 border border-gray-800 dark:border-gray-200 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:ring"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {isMenuOpen && (
        <div className="relative h-5/8 bg-white left-0 border border-red-700 z-10 ">
          <ul className="p-4 bg-white dark:bg-cyan-950 bg-orange-50">
            <li className="py-2">
              <Link href="/#navRef" passHref legacyBehavior>
                <a
                  className="nav-link underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  Accueil
                </a>
              </Link>
            </li>

            <li className="py-2">
              <Link href="/blog" passHref legacyBehavior>
                <a
                  className="nav-link underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  Blog
                </a>
              </Link>
            </li>

            <li className="py-2">
              <Link href="/portfolio" passHref legacyBehavior>
                <a
                  className="nav-link underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  Portfolio
                </a>
              </Link>
            </li>

            <li className="py-2">
              <Link href="/extra" passHref legacyBehavior>
                <a
                  className="nav-link underline underline-offset-4"
                  onClick={toggleMenu}
                >
                  Extra
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;

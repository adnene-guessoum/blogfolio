import Link from 'next/link';
import MenuToggle from './MenuToggle';

const IndexNav = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
      <MenuToggle />
      <div className="">
        <Link href="/#tech-section" passHref legacyBehavior>
          <a className="">Tech</a>
        </Link>
      </div>

      <div className="">
        <Link href="/#extra-section" passHref legacyBehavior>
          <a className="">Autres</a>
        </Link>
      </div>

      <div className="">
        <Link href="/#favoris-section" passHref legacyBehavior>
          <a className="">Favoris</a>
        </Link>
      </div>

      <div className="">
        <Link href="/#archive-section" passHref legacyBehavior>
          <a className="">Archives</a>
        </Link>
      </div>
    </div>
  );
};

export default IndexNav;

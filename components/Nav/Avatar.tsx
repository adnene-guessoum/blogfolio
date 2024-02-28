import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Avatar = () => {
  return (
    <div className="flex flex-row md:flex-wrap justify-around items-center fixed md:static top-0 left-0 right-0 pt-2 mb-0 dark:bg-opacity-60 bg-opacity-90 dark:bg-black bg-custom-beige z-50">
      <Link
        href="/"
        className="hover:underline-indigo-800 hover:underline hover:underline-offset-2 mb-2"
      >
        <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex md:flex-row flex-col items-center">
          <Image
            src="/images/index/avatar.png"
            alt="avatar"
            className="avatar rounded-full"
            width="50"
            height="50"
          />
          <h2 className="text-center text-2xl hover:underline-indigo-800 hover:underline hover:underline-offset-2 ml-2">
            Guessoum.dev
          </h2>
        </div>
      </Link>
      <div className="flex md:flex-row flex-col">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Avatar;

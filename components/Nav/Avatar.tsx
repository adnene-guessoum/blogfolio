import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Avatar = () => {
  return (
    <div className="flex flex-col justify-around items-center p-4">
      <Link
        href="/"
        className="hover:underline-indigo-800 hover:underline hover:underline-offset-2 mb-4"
      >
        <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex items-center">
          <Image
            src="/images/index/avatar.png"
            alt="avatar"
            className="avatar rounded-full"
            width="50"
            height="50"
          />
          <h1 className="text-center text-2xl hover:underline-indigo-800 hover:underline hover:underline-offset-2 ml-2">
            Blog - Guessoum.dev
          </h1>
        </div>
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default Avatar;

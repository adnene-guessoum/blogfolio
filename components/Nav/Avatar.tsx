import Image from 'next/image';
import Link from 'next/link';

const Avatar = () => {
  return (
    <Link
      href="/"
      className="hover:underline-indigo-800 hover:underline hover:underline-offset-2"
    >
      <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex gap-3 align items-center ">
        <Image
          src="/images/index/avatar.png"
          alt="avatar"
          className="avatar rounded-full"
          width="50"
          height="50"
        />
        <h1 className="text-center ml-4 text-2xl hover:underline-indigo-800 hover:underline hover:underline-offset-2">
          Blogfolio - Adnene Guessoum
        </h1>
      </div>
    </Link>
  );
};

export default Avatar;

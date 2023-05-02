import Image from 'next/image';
import Link from 'next/link';

const Avatar = () => {
  return (
    <Link href="/">
      <div className="flex gap-3 align items-center">
        <Image
          src="/images/index/avatar.png"
          alt="avatar"
          className="avatar rounded-full"
          width="50"
          height="50"
        />
        <h1 className="text-center ml-4 text-2xl">
          Blogfolio - Adnene Guessoum
        </h1>
      </div>
    </Link>
  );
};

export default Avatar;

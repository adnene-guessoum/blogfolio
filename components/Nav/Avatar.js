import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="flex gap-3 align items-center">
      <Image
        src="/images/index/avatar.png"
        alt="avatar"
        className="avatar rounded-full"
        width="50"
        height="50"
      />
      <h1 className="text-center">Blogfolio - Adnene Guessoum</h1>
    </div>
  );
};

export default Avatar;

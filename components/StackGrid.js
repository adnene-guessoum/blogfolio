import * as techImg from '../public/images';
import Image from 'next/image';

const TechStackGrid = () => {
  const techLogos = Object.values(techImg).map((image, index) => (
    <Image
      src={image.src}
      key={index}
      alt={`Image-${index}`}
      className="w-20 h-20 object-cover bg-white rounded-full"
      width={100}
      height={100}
    />
  ));

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-4 gap-20">{techLogos}</div>
    </div>
  );
};

export default TechStackGrid;

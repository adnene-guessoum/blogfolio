import {
  psqlImg,
  dockerImg,
  awsImg,
  herokuImg,
  githubImg,
  pythonImg,
  condaImg,
  poetryImg,
  taskImg,
  streamlitImg,
  djangoImg,
  flaskImg,
  sklearnImg,
  tfImg,
  pltImg,
  pandasImg,
  numpyImg,
  jsImg,
  htmlImg,
  cssImg,
  reactImg,
  nextImg,
  chakraImg,
  tailwindImg,
  npmImg,
  nodeImg,
  expressImg,
  mongoImg
} from '../public/images';

const techImg = {
  1: [jsImg, 'JavaScript'],
  2: [reactImg, 'React'],
  3: [htmlImg, 'HTML'],
  4: [cssImg, 'CSS'],
  5: [chakraImg, 'Chakra UI'],
  6: [tailwindImg, 'Tailwind CSS'],
  7: [nextImg, 'Next.js'],
  8: [npmImg, 'npm'],
  9: [nodeImg, 'Node.js'],
  10: [expressImg, 'Express.js'],
  11: [mongoImg, 'MongoDB'],
  12: [psqlImg, 'PostgreSQL'],
  13: [pythonImg, 'Python'],
  14: [djangoImg, 'Django'],
  15: [flaskImg, 'Flask'],
  16: [streamlitImg, 'Streamlit'],
  17: [numpyImg, 'NumPy'],
  18: [pandasImg, 'Pandas'],
  19: [pltImg, 'Matplotlib'],
  20: [sklearnImg, 'Scikit-Learn'],
  21: [tfImg, 'TensorFlow'],
  22: [githubImg, 'GitHub'],
  23: [taskImg, 'Task'],
  24: [poetryImg, 'Poetry'],
  25: [condaImg, 'Conda'],
  26: [dockerImg, 'Docker'],
  27: [awsImg, 'AWS'],
  28: [herokuImg, 'Heroku']
};

import Image from 'next/image';

const TechStackGrid = () => {
  const techLogos = (img, text) => {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={img}
          alt="tech logo"
          className="w-20 h-20 object-cover bg-white rounded-full bg-opacity-50 border-2 border-white shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
          width={100}
          height={100}
        />

        <p className="text-center text-sm font-semibold">{text}</p>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center mb-8 mt-8 p-4 border bg-slate-700 rounded-md">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-10 gap-20">
        {Object.values(techImg).map(tech => {
          return techLogos(tech[0], tech[1]);
        })}
      </div>
    </div>
  );
};

export default TechStackGrid;

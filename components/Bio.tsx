import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Bio = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-justify text-center w-4/5">
        <h2
          data-testid="index-title"
          className="subtitle text-6xl font-serif font-bold mb-4 shadow-sm pl-2 "
        >
          Bienvenue !
        </h2>
        <div data-testid="bio-section" className="flex flex-col gap-5 m-4 p-2">
          <h3 className="text-4xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Présentation
          </h3>
          <p className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Je suis Adnene,{' '}
            <span className="text-blue-700 dark:text-blue-300">
              développeur web{' '}
            </span>{' '}
            basé à Orly, dans le Val-de-Marne (94). Je travaille principalement
            en Javascript/Typescript et Python (React, Next, Django). Je suis
            disponible pour des missions en télétravail ou sur site en{' '}
            <span className="text-blue-700 dark:text-blue-300">
              île-de-france
            </span>
            .{' '}
          </p>
          <p className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Je réalise aussi bien des missions de{' '}
            <span className="text-blue-700 dark:text-blue-300">
              développement
            </span>{' '}
            que d&apos;
            <span className="text-blue-700 dark:text-blue-300">
              analyse et traîtement de données
            </span>
            . N&apos;hésitez pas à faire appel à moi pour vos projets de toute
            nature.
          </p>
          <h3 className="text-4xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Exemples projets réalisés :
          </h3>
        </div>
        {/* Latest Here */}
      </div>
    </div>
  );
};

export default Bio;

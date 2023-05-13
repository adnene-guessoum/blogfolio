import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Bio = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-justify text-center w-4/5">
        <h2 className="subtitle text-6xl font-serif font-bold mb-4 shadow-sm pl-2 ">
          Bienvenue
        </h2>
        <div className="flex flex-col gap-5 m-4 p-2">
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
            Derniers projets réalisés :
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-around border">
            <a
              href="https://bakery-proposal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold shadow-sm flex flex-col justify-center underline underline-offset-2 hover:text-blue-700"
            >
              <Image
                src="/images/thumbnails/thumbnail_bakery.png"
                alt="Modèle pour présentation de projet de cakeshop"
                className="rounded-lg"
                width={640}
                height={360}
              />
            </a>

            <div className="flex flex-col items-center p-2 justify-center gap-2">
              <a
                href="https://bakery-proposal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold flex flex-col underline underline-offset-2 hover:text-blue-700"
              >
                <span className="text-xl flex gap-4 items-center">
                  <BsBoxArrowUpRight size={40} />
                  Visiter le site
                </span>
              </a>
              <a
                href="https://github.com/adnene-guessoum/Bakery-Proposal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold flex flex-col underline underline-offset-2 hover:text-blue-700"
              >
                <span className="text-xl flex gap-4 items-center">
                  <FaGithub size={40} />
                  Code source
                </span>
              </a>

              <div className="text-lg font-serif font-bold shadow-sm">
                Modèle / Template pour présentation de projet de cakeshop.
              </div>
            </div>
          </div>

          <div className="hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-around border">
            <a
              href="https://orly-insoumise.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold shadow-sm flex flex-col justify-center underline underline-offset-2 hover:text-blue-700 "
            >
              <Image
                src="/images/thumbnails/thumbnail_orly.png"
                alt="Site web Orly Insoumise"
                className="rounded-lg"
                width={640}
                height={360}
              />
            </a>
            <div className="flex flex-col items-center justify-center p-2 gap-2">
              <a
                href="https://github.com/adnene-guessoum/Orly-insoumise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold flex flex-col underline underline-offset-2 hover:text-blue-700"
              >
                <span className="text-xl flex gap-4 items-center">
                  <BsBoxArrowUpRight size={40} />
                  Visiter le site
                </span>
              </a>
              <a
                href="https://github.com/adnene-guessoum/Orly-insoumise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold flex flex-col underline underline-offset-2 hover:text-blue-700"
              >
                <span className="text-xl flex gap-4 items-center">
                  <FaGithub size={40} />
                  Code source
                </span>
              </a>

              <div className="text-lg font-serif font-bold shadow-sm">
                Site internet / blog pour le groupe d&apos;action politique Orly
                Insoumise.
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Latest = (): JSX.Element => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <div className=" w-4/5 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-around border">
        <a
          href="https://bugtrax.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-bold shadow-sm flex flex-col justify-center underline underline-offset-2 hover:text-blue-700"
        >
          <Image
            src="/images/thumbnails/thumbnail_bugtrax.png"
            alt="illustration Bug tracker"
            className="rounded-lg"
            width={640}
            height={360}
          />
        </a>

        <div className="flex flex-col items-center p-2 justify-center gap-2">
          <a
            href="https://bugtrax.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold flex flex-col underline underline-offset-2 hover:text-blue-700"
          >
            <span className="text-xl flex gap-4 items-center">
              <BsBoxArrowUpRight size={40} />
              visiter le site
            </span>
          </a>
          (connexion directe possible avec un compte invité sans inscription)
          <a
            href="https://github.com/adnene-guessoum/Bugtrax"
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
            Full-stack bug tracker / gestionnaire de tâches MERN.
          </div>
        </div>
      </div>
      <div className=" w-4/5 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-around border">
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

      {/*
      <div className=" w-4/5 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-wrap justify-around border">
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
		*/}
    </div>
  );
};

export default Latest;

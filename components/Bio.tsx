import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Bio = () => {
  return (
    <div className="text-justify text-center">
      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm pl-2 ">
        Bienvenue
      </h2>
      <div className="flex flex-col gap-5 m-4 p-2">
        <h3 className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
          Présentation
        </h3>
        <p className="text-lg font-serif font-bold mb-4 shadow-sm pl-2 ">
          Je m&apos;appelle <span className="text-blue-500">Adnene</span> et je
          suis développeur web. Je suis disponible pour des missions en
          télétravail ou en présentiel sur la région{' '}
          <span className="text-blue-500">île-de-france</span>. Je travail
          principalement en Javascript/Typescript et Python.
        </p>
        <p className="text-lg font-serif font-bold mb-4 shadow-sm pl-2 ">
          Je réalise aussi bien des missions de{' '}
          <span className="text-blue-500">développement</span> que d&apos;
          <span className="text-blue-500">analyse de données</span>.
        </p>
        <p className="text-lg font-serif font-bold mb-4 shadow-sm pl-2 ">
          N&apos;hésitez pas à faire appel à moi pour vos projets de toute
          nature.
        </p>
      </div>
      <div className="flex flex-col gap-5 m-4 p-2">
        <h3 className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
          Dernier projet réalisé :
        </h3>
        <div className="flex flex-wrap justify-around items-center border p-2">
          <a
            href="https://orly-insoumise.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold mb-4 shadow-sm pl-2 flex flex-col justify-center items-center underline underline-offset-2 hover:text-blue-700 "
          >
            <Image
              src="/images/thumbnails/thumbnail_orly.png"
              alt="Site web Orly Insoumise"
              className="rounded-lg shadow-lg border-2 border-blue-500 mb-4"
              width={400}
              height={700}
            />
            Visiter le site
          </a>

          <div className="flex flex-col justify-center items-center w-1/3">
            <a
              href="https://github.com/adnene-guessoum/Orly-insoumise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold mb-4 shadow-sm pl-2 flex flex-col justify-center items-center underline underline-offset-2 hover:text-blue-700 text-lg"
            >
              <span className="text-2xl flex gap-4 items-center">
                <FaGithub
                  size={50}
                  className="text-blue-500 font-serif font-bold mb-4 shadow-sm pl-2 "
                />
                Voir le code source
              </span>
            </a>

            <p className="text-lg font-serif font-bold mb-4 shadow-sm pl-2 ">
              Site internet / blog pour le groupe d&apos;action politique Orly
              Insoumise.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 m-4 p-2">
        <div className="flex flex-col justify-center items-center border m-4 p-2">
          <Image
            src="/images/thumbnails/thumbnail_orly.png"
            alt="Site web Orly Insoumise"
            className="rounded-lg shadow-lg border-2 border-blue-500"
            width={200}
            height={200}
          />

          <a
            href="https://orly-insoumise.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-serif font-bold mb-4 shadow-sm pl-2 "
          >
            Visiter le site
          </a>

          <a
            href="https://github.com/adnene-guessoum/Orly-insoumise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-serif font-bold mb-4 shadow-sm pl-2 "
          >
            <FaGithub className="text-blue-500 font-serif font-bold mb-4 shadow-sm pl-2 " />
            Voir le code source
          </a>

          <p className="text-lg font-serif font-bold mb-4 shadow-sm pl-2 ">
            Site internet / blog pour le groupe d&apos;action politique Orly
            Insoumise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;

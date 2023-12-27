const Coeur = () => {
  return (
    <div className="coeur">
      <h2 className=" underline subtitle text-4xl font-serif font-bold shadow-sm pl-2 mt-4 ">
        Coup de coeur :
      </h2>{' '}
      <div className="contact-container border border-slate-500 sm:m-6 sm:p-10 p-2 m-2 flex justify-between">
        <ul className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg w-full">
          <li className="border-b-2 border-gray-700 py-4">
            <p className="text-lg font-medium">
              Tech :
              <a
                href="https://doc.rust-lang.org/book/"
                className="text-lg underline underline-offset-4 ml-2 font-medium"
                target="_blank"
              >
                Le Livre Rust{' '}
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Par la Rust foundation
            </p>
            <p className="m-2">
              Rust est un langage de programmation système conçu pour être sûr,
              rapide et concurrent. Il a été créé initialement par Mozilla en
              2010 et a depuis gagné en popularité auprès des développeurs en
              raison de ses fonctionnalités uniques et de ses avantages.
              <br />
              <br />
              Je suis plutôt un dev python et JS. Apprendre un langage de moins
              haut niveau et plus performant me semble être une bonne idée. Et
              puis les crabes et la rouille sont hype en ce moment.
            </p>
          </li>

          <li className="border-b-2 border-gray-700 py-4">
            <p className="text-lg font-medium">
              Lecture :
              <a
                href="https://gallica.bnf.fr/ark:/12148/bpt6k102435w.texteImage"
                className="text-lg underline underline-offset-4 ml-2 font-medium"
                target="_blank"
              >
                Les Essais{' '}
              </a>
            </p>{' '}
            <p className="text-gray-600 dark:text-gray-400">
              Par Michel De Montaigne{' '}
            </p>
            <p className="m-2">
              Exploration d&apos;une grande variété de sujets, allant de la
              philosophie et de la politique à la religion et à la culture. Les
              essais sont écrits dans un style personnel et introspectif, dans
              lequel Montaigne utilise sa propre vie et ses expériences comme
              point de départ pour réfléchir sur des sujets plus larges.
            </p>
          </li>
          <li className="py-4">
            <p className="text-lg font-medium">
              Jeu :
              <a
                href="https://www.jeuxvideo.com/jeux/playstation-4-ps4/00053069-bloodborne.htm"
                className="text-lg underline underline-offset-4 ml-2 font-medium"
                target="_blank"
              >
                Bloodborne{' '}
              </a>
            </p>{' '}
            <p className="text-gray-600 dark:text-gray-400">
              Par From Software
            </p>
            <p className="m-2">
              Grand fan des jeux from software, je suis arrivée douloureusement
              au bout de Sekiro il y a quelques mois. Aprés Demon Souls, DS1,
              DS3, Elden Ring et les cinq premières heures de DS2 (...). Il ne
              restait donc plus que celui-là. Et aprés, que fera-t-on ? On verra
              bien ce qu&apos;Armored Core vaut j&apos;imagine.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coeur;

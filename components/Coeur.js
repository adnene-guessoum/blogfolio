const Coeur = () => {
  return (
    <div className="coeur">
      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm pl-2 ">
        En ce moment :
      </h2>{' '}
      <div className="contact-container border border-slate-500 m-6 p-10 flex justify-between">
        <ul className="bg-gray-800 p-4 rounded-lg w-full">
          <li className="border-b-2 border-gray-700 py-4">
            <p className="text-lg font-medium">Technologie</p>
            <p className="text-gray-400">Par</p>
            <p className="mt-2">description</p>
            <a
              href="https://www.amazon.fr/"
              className="text-lg font-medium text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              Lien
            </a>
          </li>

          <li className="border-b-2 border-gray-700 py-4">
            <p className="text-lg font-medium">Livre</p>
            <p className="text-gray-400">Par </p>
            <p className="mt-2">description</p>
            <a
              href="https://www.amazon.fr/"
              className="text-lg font-medium text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              Lien
            </a>
          </li>

          <li className="border-b-2 border-gray-700 py-4">
            <p className="text-lg font-medium">Film et séries</p>
            <p className="text-gray-400">Par</p>
            <p className="mt-2">description</p>
            <a
              href="https://www.amazon.fr/"
              className="text-lg font-medium text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              Lien
            </a>
          </li>
          <li className="py-4">
            <p className="text-lg font-medium">Jeux Video</p>
            <p className="text-gray-400">Par</p>
            <p className="mt-2">description</p>
            <a
              href="https://www.amazon.fr/"
              className="text-lg font-medium text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              Lien
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coeur;

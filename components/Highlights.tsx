import React from 'react';

const Highlights = () => {
  return (
    <div className="flex w-full h-96 lg:h-[38em] items-center justify-center border border-black dark:border-white">
      <div className="flex w-full h-full border">
        <div className="group slide bg-thumbDash flex flex-col justify-end">
          <div className="hidden group-hover:flex flex-col justify-center items-center backdrop-blur bg-slate-300 md:w-1/2 w-full p-2 rounded-xl">
            <h3 className=" text-xl text-black font-bold">
              Prédiction défaut crédit
            </h3>
            <p className="text-black text-sm">ML Xgboost Flask Python</p>
            <a
              className="hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://github.com/adnene-guessoum/Projet_scoring_credit"
              target="_blank"
              rel="noreferrer"
            >
              repo Github
            </a>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://adnene-guessoum-projet-scoring--appdashboard-withnavbar-povy74.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              Déploiement Streamlit - Heroku
            </a>
          </div>
        </div>
        <div className="group slide bg-thumbOrly flex flex-col justify-end">
          <div className="hidden group-hover:flex flex-col justify-center items-center backdrop-blur bg-slate-300 md:w-2/3 w-full p-2 rounded-xl">
            <h3 className=" text-xl text-black font-bold">
              Freelance Frontend
            </h3>
            <p className="text-black text-sm">
              Next.js React Typescript Tailwind EmailJS
            </p>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://github.com/adnene-guessoum/Orly-insoumise"
              target="_blank"
              rel="noreferrer"
            >
              repo github (autorisée)
            </a>

            <a
              className="hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://orly-insoumise.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Déploiement Vercel
            </a>
          </div>
        </div>
        <div className="group slide bg-thumbAsser flex items-end justify-end">
          <div className="hidden group-hover:flex flex-col justify-center items-center backdrop-blur bg-slate-300 md:w-1/2 w-full p-2 rounded-xl">
            <h3 className="text-xl text-black font-bold">Clone Frontend</h3>
            <p className="text-black text-sm">Next React Chakra-ui JS</p>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://github.com/adnene-guessoum/Assercar-clone"
              target="_blank"
              rel="noreferrer"
            >
              repo Github
            </a>
            <div className="flex flex-row gap-4">
              <a
                className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
                href="https://www.assercar.fr/Accueil.php"
                target="_blank"
                rel="noreferrer"
              >
                Site d&apos;origine
              </a>
              <a
                className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
                href="https://assercar-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Resultat
              </a>
            </div>
          </div>
        </div>
        <div className="group slide bg-thumbOwl flex justify-end">
          <div className="hidden group-hover:flex flex-col justify-center items-center backdrop-blur bg-slate-300 h-1/3 p-2 rounded-xl">
            <h3 className=" text-xl text-black font-bold">Portfolio 1.0</h3>
            <p className="text-black text-sm">
              Next React Chakra three.js framer
            </p>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://github.com/adnene-guessoum/Owling-dev"
              target="_blank"
              rel="noreferrer"
            >
              repo Github
            </a>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://owling-dev.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Déploiement Vercel
            </a>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://www.craftz.dog/"
              target="_blank"
              rel="noreferrer"
            >
              Crédit : Devaslife
            </a>
          </div>
        </div>
        <div className="group slide bg-thumbGh flex items-end">
          <div className="hidden group-hover:flex flex-col justify-center items-center backdrop-blur bg-slate-300 md:w-1/2 w-full p-2 rounded-xl">
            <h3 className="text-xl text-black font-bold">Mini CLI github</h3>
            <p className="text-black text-sm">Python Typer Poetry GithubAPI</p>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://github.com/adnene-guessoum/Github_cli"
              target="_blank"
              rel="noreferrer"
            >
              repo Github
            </a>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://pypi.org/project/gh-star-count/"
              target="_blank"
              rel="noreferrer"
            >
              Package Pypi
            </a>
          </div>
        </div>

        <div className="group slide bg-thumbBlog flex justify-end">
          <div className="hidden group-hover:flex flex-col justify-center items-center backdrop-blur bg-slate-300 h-1/4 p-2 rounded-xl">
            <h3 className="text-xl text-black font-bold">
              Pipeline Déploiement / DevOps
            </h3>
            <p className="text-black text-sm">
              AWS Django React Psql Docker nginx
            </p>
            <a
              className=" hover:text-orange-500 underline undeline-white text-black text-sm p-0 m-0"
              href="https://github.com/adnene-guessoum/blog"
              target="_blank"
              rel="noreferrer"
            >
              repo Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

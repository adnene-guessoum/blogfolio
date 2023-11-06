const Bio = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-justify text-center sm:w-4/5">
        <h2
          data-testid="index-title"
          className="subtitle text-6xl font-serif font-bold mb-4 shadow-sm pl-2 "
        >
          Bienvenue sur mon blogfolio.
        </h2>
        <div
          data-testid="bio-section"
          className="flex flex-col gap-5 sm:m-4 p-2"
        >
          <h3 className="sm:text-4xl text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Présentation
          </h3>
          <p className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Je suis un développeur basé à Orly, dans le Val-de-Marne (94). Je
            travaille principalement en Javascript/Typescript et Python (React,
            Next, Flask, Scrapy etc.). Ce site me sert d&apos;espace personnel
            pour discuter de tout et de rien et montrer quelques projets sur
            lesquels je travaille dans mon temps libre.{' '}
          </p>
          <p className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Je travaille actuellement chez Data Impact by NielsenIQ comme
            développeur python, et je suis disponible pour des projets en
            freelance en développement web, en scraping ou en data science.
          </p>
          <p className="text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Mais surtout, j&apos;utilise mon temps libre en projets personnels,
            open source et en discussions en tout genres que je partage ici.
            J&apos;espère que vous trouverez ici quelque chose qui vous
            intéresse !
          </p>
          <h3 className="sm:text-4xl text-2xl font-serif font-bold mb-4 shadow-sm pl-2 ">
            Quelques exemples :
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Bio;

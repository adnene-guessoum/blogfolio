const Bio = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2
        data-testid="index-title"
        className="subtitle font-serif font-bold shadow-sm mb-4"
      >
        Bienvenue sur mon blog.
      </h2>
      <div data-testid="bio-section" className="flex flex-col">
        <h3 className="flex font-serif font-bold shadow-sm">Présentation</h3>
        <div className="flex font-serif font-bold shadow-sm p-2 text-justify">
          Développeur Python chez Data Impact by NielsenIQ et habitant Orly,
          dans le Val-de-Marne (94). Je travaille principalement avec JS/TS et
          Python (React, Next, Flask, Scrapy etc.). Ce site me sert
          d&apos;espace personnel pour discuter de tout et de rien et montrer
          quelques uns de mes projets.{' '}
        </div>
        <div className="flex font-serif font-bold shadow-sm p-2 text-justify">
          Quand &apos;en ai l&apos;occasion, j&apos;utilise mon temps libre à
          étendre mes compétences et en discussions en tout genres.
          J&apos;espère que vous trouverez quelque chose qui vous intéresse !
        </div>
      </div>
    </div>
  );
};

export default Bio;

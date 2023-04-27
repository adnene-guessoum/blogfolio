const Bio = () => {
  return (
    <div className="text-justify text-center">
      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm ">
        Bienvenue chez moi.
      </h2>
      <div className="flex flex-col gap-5 ml-4">
        <p>
          Ce petit espace est l&apos;endroit où je collecte mes idées, mes
          découvertes, mes opinions et mes projets. J&apos;écris toutes sortes
          de choses ici. J&apos;aimerais garder ce site assez simple et
          minimaliste.
        </p>
        <p>
          En même temps, Je compte tout de même y partager mes projets et mes
          réalisations professionnelles et personnelles.
        </p>
        <p>
          Je suis un développeur web full-stack intéressé par les technologies
          d&apos;IA, les questions de sociétés et les lectures en tout genres.
          ça risque bien d&apos;être heclectique mais j&apos;espère que vous y
          trouverez votre compte.
        </p>
      </div>
    </div>
  );
};

export default Bio;

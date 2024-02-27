const Accueil = (): JSX.Element => {
  return (
    <div
      className="flex flex-col justify-center item-center"
      data-testid="accueil"
    >
      <p>Accueil</p>

      <div className="flex flex-col justify-center items-center">
        Hello World
      </div>
    </div>
  );
};

export default Accueil;

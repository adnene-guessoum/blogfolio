import Bio from '../components/Bio';

const Accueil = () => {
  return (
    <div className="flex flex-col justify-center item-center">
      <div>
        <h2>Bienvenue</h2>
      </div>

      <Bio />
    </div>
  );
};

export default Accueil;

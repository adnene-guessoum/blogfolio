import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Coeur from '../components/Coeur';

const Accueil = () => {
  return (
    <div className="flex flex-col gap-5 justify-center item-center">
      <Bio />
      <Contact />
      <Coeur />
    </div>
  );
};

export default Accueil;

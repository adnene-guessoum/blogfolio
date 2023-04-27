import Bio from '../components/Bio';
import Contact from '../components/Contact';

const Accueil = () => {
  return (
    <div className="flex flex-col gap-5 justify-center item-center">
      <Bio />
      <Contact />
    </div>
  );
};

export default Accueil;

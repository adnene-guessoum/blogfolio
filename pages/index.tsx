import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Latest from '../components/Latest';

const Accueil = (): JSX.Element => {
  return (
    <div
      className="flex flex-col gap-5 justify-center item-center"
      data-testid="accueil"
    >
      <Bio />
      <Latest />
      <Contact />
    </div>
  );
};

export default Accueil;

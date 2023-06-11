import Bio from '../components/Bio';
import Contact from '../components/Contact';

const Accueil = (): JSX.Element => {
  return (
    <div
      className="flex flex-col gap-5 justify-center item-center"
      data-testid="accueil"
    >
      <Bio />
      <Contact />
    </div>
  );
};

export default Accueil;

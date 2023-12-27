import StackGrid from '../components/StackGrid';
import Projects from '../components/Projects';
import Highlights from '../components/Highlights';
import Latest from '../components/Latest';

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-12">
        <div>
          <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm">
            Derniers projets :
          </h2>
          <Latest />
        </div>

        <div>
          <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-12">
            Github :{' '}
          </h2>
          <Projects />
        </div>

        <div>
          <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
            Pile technique :
          </h2>
          <StackGrid />
        </div>

        <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
          Autres :
        </h2>
        <Highlights />
      </div>
    </>
  );
};

export default Portfolio;

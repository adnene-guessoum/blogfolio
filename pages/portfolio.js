import TechStackGrid from '../components/StackGrid';
import Projects from '../components/Projects';

const Portfolio = () => {
  return (
    <>
      <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
        A la une :{' '}
      </h2>
      {/* <ImportantProjects /> */}

      <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
        Github :{' '}
      </h2>
      <Projects />
      <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
        Pile technique :
      </h2>
      <TechStackGrid />
    </>
  );
};

export default Portfolio;

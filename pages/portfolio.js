import StackGrid from '../components/StackGrid';
import Projects from '../components/Projects';
import Highlights from '../components/Highlights';

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border w-full">
        <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
          A la une : {/* <ImportantProjects /> */}
        </h2>
      </div>
      <Highlights />

      <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
        Github :{' '}
      </h2>
      <Projects />
      <h2 className="subtitle text-4xl text-center font-serif font-bold mb-4 shadow-sm mt-4">
        Pile technique :
      </h2>
      <StackGrid />
    </>
  );
};

export default Portfolio;

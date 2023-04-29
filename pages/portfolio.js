import TechStackGrid from '../components/StackGrid';

const Portfolio = () => {
  return (
    <>
      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm ">
        Mes Projets sur Github et ailleurs :{' '}
      </h2>
      <ProjectGrid />

      <h2 className="subtitle text-4xl font-serif font-bold mb-4 shadow-sm">
        Pile technique :
      </h2>
      <TechStackGrid />
    </>
  );
};

export default Portfolio;

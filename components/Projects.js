import getRepos from '../lib/getRepos';
import RepoUi from '../components/RepoUi';

const ProjectGrid = async () => {
  const data = await getRepos();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data && data.map(repo => <Repos key={repo.id} repo={repo} />)}
    </div>
  );
};

export default ProjectGrid;

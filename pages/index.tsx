import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';
import FoldableArchive from '../components/FoldableArchive';
import VoxelOwl from '../components/voxel-owl';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('publications'));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('publications', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.replace('.mdx', '')
    };
  });

  const sortByDate = (a, b) => {
    const dateA = new Date(a.frontMatter.date).getTime();
    const dateB = new Date(b.frontMatter.date).getTime();
    return dateB - dateA;
  };

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  };
}

const Accueil = ({ posts }): JSX.Element => {
  return (
    <div className="w-full">
      {/* Accueil - tech blog */}
      <div className="lg:hidden flex">
        <VoxelOwl />
      </div>

      <section id="tech-section" className="flex flex-col my-4 sm:ml-10 mx-2">
        <h2 className="text-4xl sm:text-5xl font-bold underline text-center">
          Tech & Dev:
        </h2>
        <p className="m-2 text-xl font-serif font-bold border-b-4 mb-4 shadow-sm text-center">
          Explorations & thoughts:
        </p>

        <h3 className="m-2 text-2xl font-serif font-bold mb-4 shadow-sm">
          Programming:
        </h3>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          code snippets, tips and tricks, lectures, books, concepts, etc.
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
          {[...posts].reverse().map((post, index) => {
            if (post.frontMatter.category === 'programming') {
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>

        <h3 className="m-2 text-2xl font-serif font-bold mb-4 shadow-sm">
          Cybersecurity :
        </h3>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          Anything related to security concepts and tools.
        </p>
        <div className="flex flex-col lg:flex-row justify-start gap-2 m-5">
          {[...posts].reverse().map((post, index) => {
            if (post.frontMatter.category === 'cybersecurity') {
              console.log(post);
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>

        <h3 className="m-2 text-2xl font-serif font-bold mb-4 shadow-sm">
          AI & Machine Learning :
        </h3>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          Understanding the current technological revolution.
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
          {[...posts].reverse().map((post, index) => {
            if (post.frontMatter.category === 'AI') {
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>
      </section>

      {/* Extra blog */}
      <section id="extra-section" className="flex flex-col my-4 sm:ml-10 mx-2">
        <h2 className="text-4xl sm:text-5xl font-bold underline text-center">
          Break Room :
        </h2>
        <p className="m-2 text-xl font-serif font-bold border-b-4 mb-4 shadow-sm text-center">
          Cogitations & Peregrinations
        </p>

        <h3 className="m-2 text-2xl font-serif font-bold mb-4 shadow-sm">
          Society, readings and entertainment :
        </h3>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          Cause having fun is part of life too.
        </p>
        <div className="flex flex-col lg:flex-row justify-start gap-2 m-5">
          {[...posts].reverse().map((post, index) => {
            if (post.frontMatter.category === 'extra') {
              console.log(post);
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>
        {/*
        <h3 className="m-2 text-2xl font-serif font-bold mb-4 shadow-sm">
          Entertainment :
        </h3>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          Cause Having fun is part of life too.
        </p>
        <div className="flex flex-col lg:flex-row justify-start gap-2 m-5">
          {[...posts].reverse().map((post, index) => {
            if (post.frontMatter.category === 'divertissement') {
              console.log(post);
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div> */}
      </section>

      {/* Section Favoris

      <section
        id="favoris-section"
        className="favs flex flex-col my-4 sm:ml-10 mx-2"
      >
        <h2 className="text-4xl border-b-4 p-5 font-bold underline text-center">
          Coup de coeur:
        </h2>{' '}
        <div>
          <Coeur />
        </div>
        <hr className="my-2" />
      </section>
			*/}

      {/* Section Archives */}
      <section id="archive-section" className="archives">
        <FoldableArchive posts={[...posts].reverse()} />
      </section>
    </div>
  );
};

export default Accueil;

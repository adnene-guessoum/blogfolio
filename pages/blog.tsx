import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';
import FoldableArchive from '../components/FoldableArchive';

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

const Blog = ({ posts }) => {
  return (
    <>
      <h1 className="text-5xl border-b-4 p-5 font-bold underline">Blog</h1>
      <div className="border flex flex-col my-10">
        <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
          Pratique :
        </h2>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          bouts de code, trucs et astuces, entraînements, etc.
        </p>
        <div className="flex flex-col lg:flex-row justify-start gap-2 m-5">
          {posts.map((post, index) => {
            if (post.frontMatter.category === 'pratique') {
              console.log(post);
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>
        <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
          Théorique :
        </h2>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          Paradigmes, concepts, lectures, etc.
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
          {posts.map((post, index) => {
            if (post.frontMatter.category === 'theorique') {
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>

        <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
          Actualités et veille :
        </h2>
        <p className="m-2 text-xl font-serif font-bold mb-4 shadow-sm">
          Nouveautés, événements, technologies, tendances, etc.
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
          {posts.map((post, index) => {
            if (post.frontMatter.category === 'actu') {
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>
      </div>

      <FoldableArchive posts={posts} />
    </>
  );
};

export default Blog;

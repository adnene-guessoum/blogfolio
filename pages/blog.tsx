import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';
import FoldableArchive from '../components/FoldableArchive';
import Coeur from '../components/Coeur';

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
    const dateA = new Date(a.frontMatter.date);
    const dateB = new Date(b.frontMatter.date);
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
          Code :
        </h2>
        <div className="flex flex-col lg:flex-row justify-start gap-2 m-5">
          {posts.map((post, index) => {
            if (post.frontMatter.category === 'code') {
              console.log(post);
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>
        <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
          Tech :
        </h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
          {posts.map((post, index) => {
            if (post.frontMatter.category === 'tech') {
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>

        <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
          Divers :
        </h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
          {posts.map((post, index) => {
            if (post.frontMatter.category === 'divers') {
              return <PostCard post={post} index={index} key={index} />;
            }
          })}
        </div>
      </div>

      <FoldableArchive posts={posts} />

      <Coeur />
    </>
  );
};

export default Blog;

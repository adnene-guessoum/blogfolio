import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';

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
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
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
      <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
        Tech :
      </h2>
      <div className="flex flex-col lg:flex-row justify-start gap-2 m-5">
        {posts.map((post, index) => {
          if (post.frontMatter.category === 'tech') {
            console.log(post);
            return <PostCard post={post} index={index} key={index} />;
          }
        })}
      </div>
      <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
        General :
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
        {posts.map((post, index) => {
          if (post.frontMatter.category === 'general') {
            return <PostCard post={post} index={index} key={index} />;
          }
        })}
      </div>

      <h2 className="m-2 text-4xl font-serif font-bold mb-4 shadow-sm">
        Divertissement :
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-start gap-2 m-5">
        {posts.map((post, index) => {
          if (post.frontMatter.category === 'divertissement') {
            return <PostCard post={post} index={index} key={index} />;
          }
        })}
      </div>
    </>
  );
};

export default Blog;

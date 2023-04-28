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
      <h2>Tech</h2>
      <div className="flex flex-wrap mt-5 justify-around">
        {posts.map((post, index) => (
          <PostCard post={post} index={index} key={index} />
        ))}
      </div>
      <h2>General</h2>
      <h2>Divertissement</h2>
      <h2>Coups de coeur</h2>
    </>
  );
};

export default Blog;

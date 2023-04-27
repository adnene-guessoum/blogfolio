import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MyLink from '../components/general/Link';
import Image from 'next/image';

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
    <div className="mt-5">
      {posts.map((post, index) => (
        <MyLink href={`/blog/${post.slug}`} key={index}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
            <div className="card mb-4 pointer border">
              <div className="relative h-48 md:h-64 lg:h-80 border">
                <div className="absolute top-0 left-0 w-full h-full border">
                  <h5 className="card-title">{post.frontMatter.title} Hello</h5>
                </div>
              </div>
            </div>
          </div>
        </MyLink>
      ))}
      ;
    </div>
  );
};

export default Blog;

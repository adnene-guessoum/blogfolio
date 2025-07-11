import Layout, { WEBSITE_HOST_URL } from '../../components/Layout/main';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import Link from 'next/link';
import Image from 'next/image';

const components = {
  SyntaxHighlighter: props => (
    <div className="flex justify-center max-w-2/3">
      <SyntaxHighlighter style={dracula} {...props} />
    </div>
  ),
  Image: props => (
    <div className="flex justify-center">
      <Image
        {...props}
        width={700}
        height={500}
        className="center"
        alt="illustration"
      />
    </div>
  )
};

const PostPage = ({ mdxSource, frontMatter }) => {
  const customMeta = {
    title: frontMatter.title,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    category: frontMatter.category,
    type: 'article',
    ...frontMatter
  };

  return (
    <Layout customMeta={customMeta}>
      <div className="ml-auto container">
        <article className="mt-3 text-justify sm:p-4 p-2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
          <p className="text-sm text-gray-500">{frontMatter.date}</p>
          <hr className="my-3" />
          <div className="flex flex-col text-justify justify-center items-center">
            <div className="sm:w-2/3 w-5/6">
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        </article>
        <div className="ml-4 underline text-xl">
          <Link
            className="m-4 underline text-xl"
            href="/#tech-section"
            passHref
            legacyBehavior
          >
            <a className="nav-link">Retour aux articles</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync('publications');
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('publications', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, { scope: frontMatter });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  };
};

export { getStaticPaths, getStaticProps };
export default PostPage;

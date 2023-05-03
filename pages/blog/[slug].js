import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { MyLink } from '../../components';
import Image from 'next/image';

const components = {
  MyLink,
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

const PostPage = ({ mdxSource, frontMatter: { title, date } }) => {
  return (
    <div className="mt-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500">{date}</p>
      <hr className="my-3" />
      <MDXRemote {...mdxSource} components={components} />
    </div>
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

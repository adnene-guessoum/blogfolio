import React, { useState } from 'react';
import MyLink from './general/Link';

const FoldableArchive = ({ posts }): JSX.Element => {
  const [isFolded, setIsFolded] = useState(false);

  const toggle = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div className="mb-10">
      <div className="flex flex-row justify-between lg:justify-center lg:gap-2">
        <h2>Archives</h2>
        <button
          onClick={toggle}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {isFolded ? 'Cacher' : 'Afficher'}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {isFolded && (
          <div className="shadow-md sm:rounded-lg lg:w-1/2 mt-2">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <tbody>
                {posts.map((post, index) => (
                  <tr
                    key={index}
                    className="bg-white border shadow-none dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                  >
                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      {post.frontMatter.date}
                    </td>
                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      <MyLink href={`/blog/${post.slug}`} key={index}>
                        {post.frontMatter.title}
                      </MyLink>
                    </td>

                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      {post.frontMatter.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoldableArchive;

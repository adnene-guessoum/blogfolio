import Image from 'next/image';
import MyLink from './general/Link';

const PostCard = ({ post, index }) => {
  return (
    <div
      className="flex flex-wrap gap-5 items-center justify-center sm:justify-start border border-slate-700 shadow-lg p-1 min-w-fit"
      key={index}
    >
      <div className="image-container">
        <Image
          src={post.frontMatter.thumbnailUrl}
          className="img-thumbnail rounded-start"
          width={200}
          height={200}
          alt={post.frontMatter.title}
          objectFit="cover"
        />
      </div>
      <div className="card mb-4 pointer border-l-4 border-blue-500 border-solid pl-4 min-w-fit">
        <MyLink href={`/blog/${post.slug}`} key={index}>
          <h5 className="card-title text-xl">{post.frontMatter.title}</h5>
        </MyLink>
        <p className="card-description pl-2 mt-2">
          {post.frontMatter.description}
        </p>
        <p className="date-publication text-gray-400">
          {post.frontMatter.date}
        </p>
      </div>
    </div>
  );
};

export default PostCard;

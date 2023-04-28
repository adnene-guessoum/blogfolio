import Image from 'next/image';
import MyLink from './general/Link';

const PostCard = ({ post, index }) => {
  return (
    <div
      className="flex flex-row gap-5 items-center border border-slate-700 shadow-lg p-1"
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
      <div className="card mb-4 pointer border-l-4 border-blue-500 border-solid pl-4">
        <MyLink href={`/blog/${post.slug}`} key={index}>
          <h5 className="card-title">{post.frontMatter.title}</h5>
        </MyLink>
        <p className="card-description">{post.frontMatter.description}</p>
        <p className="date-publication">{post.frontMatter.date}</p>
        <p className="card-tags">Catégorie: {post.frontMatter.category}</p>
      </div>
    </div>
  );
};

export default PostCard;

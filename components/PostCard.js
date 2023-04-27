import Image from 'next/image';
import MyLink from './general/Link';

const PostCard = ({ post, index }) => {
  return (
    <div
      className="flex flex-col flex-wrap md:flex-row gap-5 md:items-center mb-5 border border-slate-700 shadow-lg overflow-hidden"
      style={{ minWidth: '540px' }}
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
        <p className="card-tags">Catégorie: {post.frontMatter.tags[0]}</p>
      </div>
    </div>
  );
};

export default PostCard;

import Link from 'next/link';

const MyLink = props => {
  return (
    <Link href={props.href} key={props.index} passHref legacyBehavior>
      <a className="nav-link" target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </Link>
  );
};

export default MyLink;

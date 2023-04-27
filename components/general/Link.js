import Link from 'next/link';

const MyLink = props => {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <a className="nav-link hover:text-teal-500 underline underline-offset-4">
        {props.children}
      </a>
    </Link>
  );
};

export default MyLink;

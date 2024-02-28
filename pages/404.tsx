import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col jusify-center items-center p-4 container justify-content w-screen">
      <h1>Page Indisponible</h1>
      <p className="mb-6">La page demandée est introuvable.</p>
      <h2>Que faire ?</h2>
      <p className="center">
        Retourner sur la page{' '}
        <Link href="/#tech-section" passHref legacyBehavior>
          d&apos;accueil
        </Link>
      </p>{' '}
    </div>
  );
};

export default NotFound;

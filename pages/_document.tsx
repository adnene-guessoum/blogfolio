import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="fr">
        <Head />
        <body className="text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

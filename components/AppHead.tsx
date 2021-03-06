import Head from 'next/head';

interface AppHeadInterface {
  title?: string;
}

const AppHead = ({ title }: AppHeadInterface) => {
  let pageTitle = 'Next Google Services';
  if (title) pageTitle = title;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/icons/favicon.svg" />
    </Head>
  );
};

export default AppHead;

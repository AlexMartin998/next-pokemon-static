import Head from 'next/head';

export interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Adrian" />
        <meta name="description" content={`Pokemon details: ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* <Navbar/> */}
      <main>{children}</main>
    </>
  );
};

export default MainLayout;

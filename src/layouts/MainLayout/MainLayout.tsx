import Head from 'next/head';

import { Navbar } from '@/shared/components';

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

      <Navbar />

      <main className="main-container">{children}</main>
    </>
  );
};

export default MainLayout;

import Head from 'next/head';

import { Navbar } from '@/shared/components';

export interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Adrian" />
        <meta name="description" content={`Pokemon details: ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={`${title} pokemon information`} />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>

      <Navbar />

      <main className="main-container">{children}</main>
    </>
  );
};

export default MainLayout;

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '@/api';
import { MainLayout } from '@/layouts';
import { PokemonScene } from '@/pokemons';
import { Pokemon } from '@/interfaces';
import { getPokemonInfo } from '@/pokemons/shared';
import { redirect } from 'next/dist/server/api-utils';

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  // const { query } = useRouter(); // client side - get url param

  return (
    <MainLayout title={`Pokemon id | ${pokemon.id}`}>
      <PokemonScene pokemon={pokemon} />
    </MainLayout>
  );
};






// // next.js will execute it in build time - only in server side
// only for dynamics routes WITH getStaticProps <- build 151 pages
export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map(id => ({
      params: { id }, // <- [id]
    })),

    // fallback: false,   // SSG
    fallback: 'blocking'  // ISG
  };
};



// props > FC/Page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }; // id <- getStaticPaths

  // // ISG: important to handle errors
  const pokemon = await getPokemonInfo(id);
    if ( !pokemon ) {
    return {
      redirect: {
        destination: '/', // if it don't exist, redirect to /
        
        // permanent in true tells google bots to no longer index the page
        permanent: false  // this page could be exist in the future
      }
    }
  }

  return {
    props: {
      // // in SSG it doesn't matter to handle it with try/cath because if it fails, it fails in build time
      // pokemon: await getPokemonInfo(id), // static data generated in build time

      
      // // ISG <- ISR
      pokemon
    },

    // ISR
    revalidate: 86400,  // c/24h - in seconds
  };
};

export default PokemonPage;

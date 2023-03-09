import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '@/api';
import { MainLayout } from '@/layouts';
import { PokemonScene } from '@/pokemons';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { getPokemonInfo } from '@/pokemons/shared';

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  // const { query } = useRouter(); // client side - get url param

  return (
    <MainLayout title={`Pokemon ${pokemon.name}`}>
      <PokemonScene pokemon={pokemon} />
    </MainLayout>
  );
};







// // next.js will execute it in build time - only in server side
// only for dynamics routes WITH getStaticProps <- build 151 pages with [name] as name
export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    paths: data.results.map(({ name }) => ({
      params: { name }, // name <- [name].tsx
    })),

    // fallback: false,   // SSG
    fallback: 'blocking'  // ISG
  };
};




// props > FC/Page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }; // name <- getStaticPaths

  // ISG
  const pokemon = await getPokemonInfo(name);
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
      // // SSG
      // si falla, falla en build time
      // pokemon: await getPokemonInfo(name), // static data generated in build time


      // // ISG <-- ISR
      pokemon,
    },

    // ISR
    revalidate: 86400,  // c/24h - in seconds
  };
};

export default PokemonByNamePage;

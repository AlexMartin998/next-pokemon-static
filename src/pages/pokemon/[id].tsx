import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '@/api';
import { MainLayout } from '@/layouts';
import { PokemonScene } from '@/pokemons';
import { Pokemon } from '@/interfaces';
import { getPokemonInfo } from '@/pokemons/shared';

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

    fallback: false,
  };
};

// props > FC/Page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }; // id <- getStaticPaths

  return {
    props: {
      pokemon: await getPokemonInfo(id), // static data generated in build time
    },
  };
};

export default PokemonPage;

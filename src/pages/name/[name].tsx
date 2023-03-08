import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '@/api';
import { MainLayout } from '@/layouts';
import { PokemonScene } from '@/pokemons';
import { Pokemon, PokemonListResponse } from '@/interfaces';

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

    fallback: false,
  };
};

// props > FC/Page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }; // name <- getStaticPaths
  const {
    data: { id, name: pokeName, sprites },
  } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: { id, pokeName, sprites }, // static data generated in build time
    },
  };
};

export default PokemonByNamePage;

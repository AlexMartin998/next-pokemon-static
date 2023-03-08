import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { MainLayout } from '@/layouts';
import { Text } from '@nextui-org/react';

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  // const { query } = useRouter(); // client side - get url param

  return (
    <MainLayout title="SOme Poke">
      <Text h1 transform="capitalize">
        {pokemon.name}
      </Text>
    </MainLayout>
  );
};

// // next.js will execute it in build time - only in server side
// only for dynamics routes with getStaticProps
export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map(id => ({
      params: { id }, // <- [id]
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }; // id <- getStaticPaths
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;

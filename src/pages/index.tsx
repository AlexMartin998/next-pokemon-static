import { GetStaticProps, NextPage } from 'next';

import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { MainLayout } from '@/layouts';
import { PokemonList } from '@/pokemons/scenes';

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const PokemonsPage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <MainLayout title="Pokemon List">
      <PokemonList pokemons={pokemons} />
    </MainLayout>
  );
};

// // next.js will execute it in build time - only in server side
export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,

    id: i + 1,
    imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default PokemonsPage;

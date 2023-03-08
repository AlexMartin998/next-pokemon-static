import { Grid } from '@nextui-org/react';

import { FavoriteCard } from './components';

interface FavoritePokemonsProps {
  pokemons: number[];
}

const FavoritePokemons: React.FC<FavoritePokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container
      gap={2}
      direction="row"
      justify="flex-start"
      css={{ mt: 21 }}
    >
      {pokemons.map(pokemonId => (
        <FavoriteCard key={pokemonId} pokemonId={pokemonId} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;

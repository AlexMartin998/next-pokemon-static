import { Grid } from '@nextui-org/react';

import { PokemonCard } from './components';
import { SmallPokemon } from '@/interfaces';

export interface PokemonListProps {
  pokemons: SmallPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
}: PokemonListProps) => {
  return (
    <Grid.Container gap={2} justify="flex-start" css={{ mt: 18 }}>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};

export default PokemonList;

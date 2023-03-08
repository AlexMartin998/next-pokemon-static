import { Grid } from '@nextui-org/react';

import { ImageCard, PokemonDetails } from './components';
import { Pokemon } from '@/interfaces';

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonScene: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <Grid.Container css={{ marginTop: '21px' }} gap={2}>
      <ImageCard pokemon={pokemon} />

      <PokemonDetails pokemon={pokemon} />
    </Grid.Container>
  );
};

export default PokemonScene;

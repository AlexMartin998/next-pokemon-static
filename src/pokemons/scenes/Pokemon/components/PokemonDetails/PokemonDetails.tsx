import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';

import { Pokemon } from '@/interfaces';

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <Grid xs={12} sm={8}>
      <Card css={{ p: '12px 24px' }}>
        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text h1 transform="capitalize">
            {pokemon.name}
          </Text>

          <Button color="gradient" ghost>
            Guardar en favoritos
          </Button>
        </Card.Header>

        <Card.Body>
          <Text size={30}>Sprites:</Text>

          <Container display="flex" direction="row" justify="center" gap={0}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Container>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default PokemonDetails;

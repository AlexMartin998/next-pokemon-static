import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '@/interfaces';

export interface PokemonCardProps {
  pokemon: SmallPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`); // navigate
  };

  return (
    <Grid key={pokemon.id} onClick={handleClick} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ p: '21px 9px 6px 9px' }}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            alt={pokemon.name}
            src={pokemon.imgUrl}
            width="100%"
            height={141}
          />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '@/interfaces';

export interface PokemonCardProps {
  pokemon: SmallPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, imgUrl, id } = pokemon;

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ p: '21px 9px 6px 9px' }}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={imgUrl} alt={name} width="100%" height={141} />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;

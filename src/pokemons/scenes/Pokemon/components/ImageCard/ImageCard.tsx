import { Card, Grid } from '@nextui-org/react';
import { Pokemon } from '@/interfaces';

interface ImageCardProps {
  pokemon: Pokemon;
}

const ImageCard: React.FC<ImageCardProps> = ({ pokemon }: ImageCardProps) => {
  return (
    <Grid xs={12} sm={4}>
      <Card isHoverable css={{ padding: '30px' }}>
        <Card.Body>
          <Card.Image
            src={
              pokemon.sprites.other?.dream_world.front_default ||
              '/no-image.png'
            }
            alt={pokemon.name}
            width="100%"
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default ImageCard;

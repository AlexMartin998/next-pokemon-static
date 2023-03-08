import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react';

interface FavoriteCardProps {
  pokemonId: number;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`); // nav with router
  };

  return (
    <Grid key={pokemonId} xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClick}>
      <Card isHoverable isPressable css={{ p: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCard;

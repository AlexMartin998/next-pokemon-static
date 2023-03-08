import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';

import { Pokemon } from '@/interfaces';
import { handleLocalStorage } from '@/shared/utils';
import { useState, useEffect } from 'react';

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    handleLocalStorage.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };

  // // importante setearlo en el useEffect xq sino da error 500 ya q retorna false cuando se ejecuta del lado del server y true del lado del cleint: | Warning: Text content did not match. Server: "Save in Favorites" Client: "In Favorites"
  useEffect(() => {
    setIsInFavorites(handleLocalStorage.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  /* 
  // // Only runs on client side
  useEffect(() => {
    // console.log('useEffect', localStorage.getItem('ls'));
  }, []); */

  /* console.log({
    isRunning: 'Both sides',

    // Nos ayuda a saber si estamos corriendo code del lado sel server o client
    typeOfWindowClientObj: typeof window, // server = undefined | client = obj

    // // Da ERROR xq localStorage NO existe en el server (node), solo en el cliente (browser)
    // localStorage: localStorage.getItem('ls'),
  }); */

  return (
    <Grid xs={12} sm={8}>
      <Card css={{ p: '12px 24px' }}>
        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text h1 transform="capitalize">
            {pokemon.name}
          </Text>

          <Button
            onPress={onToggleFavorite}
            color="gradient"
            bordered={!isInFavorites}
          >
            {isInFavorites ? 'In Favorites' : 'Save in Favorites'}
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

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';

import { pokeApi } from '@/api';
import { MainLayout } from '@/layouts';
import { Pokemon } from '@/interfaces';

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  // const { query } = useRouter(); // client side - get url param

  return (
    <MainLayout title={`Pokemon | ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '21px' }} gap={2}>
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

        <Grid xs={12} sm={8}>
          <Card css={{ p: '12px 24px' }}>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button color="gradient" ghost>
                Guardar en favoritos
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container
                display="flex"
                direction="row"
                justify="center"
                gap={0}
              >
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
      </Grid.Container>
    </MainLayout>
  );
};

// // next.js will execute it in build time - only in server side
// only for dynamics routes WITH getStaticProps <- build 151 pages
export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map(id => ({
      params: { id }, // <- [id]
    })),

    fallback: false,
  };
};

// props > FC/Page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }; // id <- getStaticPaths
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data, // static data generated in build time
    },
  };
};

export default PokemonPage;

import { Container, Image, Text } from '@nextui-org/react';

export interface NoPokemonProps {
  title: string;
}

const NoPokemon: React.FC<NoPokemonProps> = ({ title }) => {
  return (
    <Container
      css={{
        d: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text h1>{title}</Text>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        css={{
          opacity: 0.1,
        }}
        alt="ditto_pokemon"
      />
    </Container>
  );
};

export default NoPokemon;

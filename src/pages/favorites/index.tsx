import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { MainLayout } from '@/layouts';
import { FavoritePokemons } from '@/pokemons';
import { NoPokemon } from '@/pokemons/shared';
import { handleLocalStorage } from '@/shared/utils';

interface FPState {
  favorites: number[];
}

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<
    FPState['favorites']
  >([1]);

  useEffect(() => {
    setfavoritePokemons(handleLocalStorage.getFavoritePokemons());
  }, []);

  return (
    <MainLayout title="Favorites">
      {!favoritePokemons.length ? (
        <NoPokemon title="No favorites" />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;

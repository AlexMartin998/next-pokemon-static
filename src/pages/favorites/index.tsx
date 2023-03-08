import { NextPage } from 'next';

import { MainLayout } from '@/layouts';
import { NoPokemon } from '@/pokemons/shared';

const FavoritesPage: NextPage = () => {
  return (
    <MainLayout title="Favorites">
      <NoPokemon title="No favorites" />
    </MainLayout>
  );
};

export default FavoritesPage;

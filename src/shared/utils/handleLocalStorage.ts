const toggleFavorites = (id: number) => {
  console.log('toggleFavorites');

  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeIdLs => pokeIdLs !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const exportedFn = { toggleFavorites };
export default exportedFn;

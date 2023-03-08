const toggleFavorites = (id: number) => {
  const favoritesKey = 'favorites';

  const favoritesSet = new Set<number>(
    JSON.parse(localStorage.getItem(favoritesKey) || '[]')
  );

  console.log('toggleFavorites');

  if (favoritesSet.has(id)) favoritesSet.delete(id);
  else favoritesSet.add(id);

  // localStorage.setItem(favoritesKey, JSON.stringify([...favoritesSet]));
  localStorage.setItem(favoritesKey, JSON.stringify(Array.from(favoritesSet)));
};

const exportedFn = { toggleFavorites };
export default exportedFn;

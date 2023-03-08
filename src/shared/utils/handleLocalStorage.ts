const toggleFavorites = (id: number) => {
  const favoritesKey = 'favorites';

  const favoritesSet = new Set<number>(
    JSON.parse(localStorage.getItem(favoritesKey) || '[]')
  );

  if (favoritesSet.has(id)) favoritesSet.delete(id);
  else favoritesSet.add(id);

  // localStorage.setItem(favoritesKey, JSON.stringify([...favoritesSet]));
  localStorage.setItem(favoritesKey, JSON.stringify(Array.from(favoritesSet)));
};

const existInFavorites = (id: number): boolean => {
  // error 500 - runing in server side
  if (typeof window === 'undefined') return false;

  const favorites = new Set<number>(
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  return favorites.has(id);
};

const exportedFn = { toggleFavorites, existInFavorites };
export default exportedFn;

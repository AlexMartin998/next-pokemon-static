const favoritesKey = 'favorites';

const getFavorites = () => {
  const favorites = localStorage.getItem(favoritesKey);
  return favorites ? new Set(JSON.parse(favorites)) : new Set();
};

const toggleFavorites = (id: number): void => {
  const favoritesSet = getFavorites();

  if (favoritesSet.has(id)) favoritesSet.delete(id);
  else favoritesSet.add(id);

  // localStorage.setItem(favoritesKey, JSON.stringify([...favoritesSet]));
  localStorage.setItem(favoritesKey, JSON.stringify(Array.from(favoritesSet)));
};

const existInFavorites = (id: number): boolean => {
  // error 500 - runing in server side - it's not necesary if you use useEffect to set useState
  if (typeof window === 'undefined') return false;

  const favoritesSet = getFavorites();

  return favoritesSet.has(id);
};

const getFavoritePokemons = (): number[] =>
  JSON.parse(localStorage.getItem(favoritesKey) || '[]');

const exportedFn = { toggleFavorites, existInFavorites, getFavoritePokemons };
export default exportedFn;

import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  // ISG: necesita manejar el error xq aqui SI va a la API a traer la data en runtime
  try {
    const {
      data: { id, name, sprites },
    } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return { id, name, sprites };
  } catch (error) {
    return null;
  }
};

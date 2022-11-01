import { pokeapi } from "../api";
import { PokemonFullInfo } from "../interfaces";

export const getPokemonInfo = async(idOrName: string) => {
  try {
    const { data } = await pokeapi.get<PokemonFullInfo>(`/pokemon/${idOrName}`);
  
    const { name, id: num } = data;
    const { back_default, back_shiny, front_default, front_shiny } = data.sprites;
    const { front_default: dream_world } = data.sprites.other!.dream_world;
  
    return {
      id: num,
      name: name,
      main: dream_world,
      sprites: [front_default, back_default, front_shiny, back_shiny],
    };
  } catch (error) {
    return null
  }
};

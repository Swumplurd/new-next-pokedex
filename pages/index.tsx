import { Grid} from "@nextui-org/react";
import { pokeapi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[]
}

export default function Home({pokemons}: Props) {
  return (
    <Layout title="Home Page">
      <Grid.Container gap={2} justify={"center"}>
        {
          pokemons.map(pokemon => {
            return (
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            )
          })
        }
      </Grid.Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await pokeapi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {...pokemon, id: `${index + 1}`, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`}
  })
  return {
    props: {
      pokemons: pokemons,
    },
  };
}

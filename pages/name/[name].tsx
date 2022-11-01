import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { pokeapi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonFullInfo, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonName: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false)

  const onToggleFavorites = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)
  }

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
  }, [pokemon.id]) 

  return (
    <Layout title={pokemon.name}>
      <Container
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text h1 transform="capitalize">
          #{pokemon.id} - {pokemon.name}
        </Text>
        <Button bordered color="gradient" ghost={!isInFavorites} onPress={onToggleFavorites}>
          {isInFavorites ? "Eliminar de Favoritos" : "Guardar en Favoritos"}
        </Button>
      </Container>
      <Grid.Container gap={3}>
        {pokemon.sprites.map((img, index) => (
          <Grid key={index} lg={3} md={3} sm={3} xs={6}>
            <Card>
              <Card.Body>
                <Card.Image
                  src={img}
                  objectFit="cover"
                  width="256px"
                  height={"100%"}
                  alt={pokemon.name}
                />
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async(ctx) => {
    const {data} = await pokeapi.get<PokemonListResponse>("/pokemon?limit=151")
    
    return {
        paths: data.results.map(({name}) => ({
          params: {
            name,
          }})),
        fallback: false,
    }
};


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonName;

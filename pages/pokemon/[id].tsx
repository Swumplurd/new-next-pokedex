import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { pokeapi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonFullInfo } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};

export default Pokemon;

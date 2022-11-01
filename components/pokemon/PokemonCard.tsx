import { Card, Grid, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  const router = useRouter()

  const handlePokemonPress = () => {
    router.push(`/name/${pokemon.name}`)
  }
  return (
    <Grid lg={2} md={3} sm={4} xs={6}>
      <Card onPress={handlePokemonPress} isHoverable isPressable variant="bordered">
        <Card.Body>
          <Card.Image
            src={pokemon.img}
            objectFit="contain"
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Divider />
        <Card.Footer css={{ display: "flex", justifyContent: "space-between" }}>
          <Text transform="capitalize">{pokemon.name}</Text>
          <Text transform="capitalize">#{pokemon.id}</Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter()
  const onFavoritePokemon = () => {
    router.push(`/pokemon/${pokemonId}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={2} key={pokemonId} onClick={onFavoritePokemon}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          showSkeleton
          maxDelay={5000}
          width={320}
          height={180}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt="Imagen no disponible"
        />
      </Card>
    </Grid>
  );
};

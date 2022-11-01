import { Container, Text } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
  return (
    <Container
      md
      css={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "calc(100vh - 250px)",
      }}
    >
      <Text h1>No hay favoritos</Text>
    </Container>
  );
};

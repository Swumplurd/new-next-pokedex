import { Container } from "@nextui-org/react";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navigation } from "../ui";

type Props = {
  title?: string
}

const origin = typeof window === "undefined" ? "" : window.location.origin 

export const Layout: FC<PropsWithChildren & Props> = ({ children, title = "Pokemon App", }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="swumplurd" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`pokemon, pokedex, pokemon, ${title}`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={`Informacion sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navigation/>
      <Container as="main" lg>
        
            {children}
        
      </Container>
    </>
  );
};

import { Card, Grid } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { FavoritesPokemons } from "../../components/pokemon"
import { NoFavorites } from "../../components/ui/NoFavorites"
import { localFavorites } from "../../utils"

const Favoritos = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokemons Favoritos">
      {favorites.length === 0 ? 
      <NoFavorites/> :
      <FavoritesPokemons pokemons={favorites}/>
      }
    </Layout>
  )
}

export default Favoritos
import * as React from "react"
import PokemonCard from "./PokemonCard"
import { useQuery } from '@tanstack/react-query'

async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('fetch failed')
  }

  return response.json()
}

export default function App () {
  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon', 1],
    queryFn: () => fetchPokemon(1),
  })

  return (
    <>
      <PokemonCard 
        isLoading={isLoading} 
        data={pokemon} 
        error={error}
      />
    </>
  )
}

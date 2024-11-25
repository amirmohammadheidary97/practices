import * as React from "react"
import PokemonCard from "./PokemonCard"
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'

const pokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.string().url(),
  }).optional(),
});

async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('fetch failed')
  }

  const data = await response.json()
  return pokemonSchema.parse(data)
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
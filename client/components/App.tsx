import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const [count, setCount] = useState(0)

  const {
    data: greeting,
    isError,
    isPending,
  } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  if (isPending) return <p>Loading...</p>
  const handlePokemonSelect = (nameOrId: string) => {
    setSelectedPokemon(nameOrId);
  };

  return (
    <>
      {count}
      <h1 className="text-3xl font-bold underline text-primary">{greeting}</h1>
      {isError && (
        <p>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}
    <div>
      <h1 className="text-pink-500">Pokémon Index</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => handlePokemonSelect(pokemon.name)}>View Details</button>
          </li>
        ))}
      </ul>
      {selectedPokemon && <PokemonDetails nameOrId={selectedPokemon} />}
    </div>
  );
};

export default App
export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
// import PokemonDetails from './PokemonDetails';
import { Pokemon, PokemonResult } from './types';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemondata = await Promise.all(response.data.results.map(async (pokemon: PokemonResult) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return pokemonResponse.data;
        }));
        setPokemons(pokemondata);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemonList();
  }, []);

  // const handlePokemonSelect = (nameOrId: string) => {
  //   setSelectedPokemon(nameOrId);
  // };

  return (
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
      {/* {selectedPokemon && <PokemonDetails nameOrId={selectedPokemon} />} */}
    </div>
  );
};

export default App;
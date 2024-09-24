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
    <div className='bg-yellow-50'>
      <h1 className="text-3xl text-blue-800 font-bold p-4 text-center">Pokémon Index</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
          {pokemons.map((pokemon) => (
              <div key={pokemon.name} className="p-4 bg-white rounded-lg shadow-md">
                <PokemonCard pokemon={pokemon} />
               </div>
            ))}
      </div>
      {/* {selectedPokemon && <PokemonDetails nameOrId={selectedPokemon} />} */}
    </div>
  );
};

export default App;
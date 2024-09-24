import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon, PokemonDetailsProps } from './types';


const PokemonDetails: React.FC<PokemonDetailsProps> = ({ nameOrId }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonDetails();
  }, [nameOrId]);

  if (loading) return <p>Loading...</p>;
  if (!pokemon) return <p>No Pokémon found.</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>ID: {pokemon.id}</p>
      <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p>Height: {pokemon.height} decimetres</p>
      <p>Weight: {pokemon.weight} hectograms</p>
      <p>Sprites: {pokemon.sprites.front_default}</p>
      <p>Random text: {Math.random().toString(36).substr(2, 10)}</p>
    </div>
  );
};

export default PokemonDetails;
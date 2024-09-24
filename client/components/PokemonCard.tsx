import React from 'react';
import { Type, PokemonCardProps } from './types';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>ID: {pokemon.id}</p>
      <p>Types: {pokemon.types.map((type: Type) => type.type.name).join(', ')}</p>
      <p>Height: {pokemon.height} decimetres</p>
      <p>Weight: {pokemon.weight} hectograms</p>
    </div>
  );
};

export default PokemonCard;
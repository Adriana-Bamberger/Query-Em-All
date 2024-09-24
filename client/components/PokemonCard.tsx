import React from 'react';
import { Type, PokemonCardProps } from './types';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div 
    className="bg-white rounded-lg shadow-md p-4 w-64 h-64 cursor-pointer"
    onClick={onClick} >
      <h2 className="text-lg font-bold">{pokemon.name}</h2>
      <p className="text-sm text-gray-600">ID: {pokemon.id}</p>
      <p className="text-sm text-gray-600">Types: {pokemon.types.map((type: Type) => type.type.name).join(', ')}</p>
      <p className="text-sm text-gray-600">Height: {pokemon.height} decimetres</p>
      <p className="text-sm text-gray-600">Weight: {pokemon.weight} hectograms</p>
    </div>
  );
};

export default PokemonCard;
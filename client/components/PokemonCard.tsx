import React from 'react';
import { Type, PokemonCardProps } from './types';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className=" rounded-lg border-2 border-yellow-100 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer p-4 w-64 h-64" >
      <h2 className="text-lg text-blue-800 font-bold">{pokemon.name}</h2>
      {/* <p className="text-sm text-gray-600">ID: {pokemon.id}</p> */}
      <p className="text-sm text-gray-600">Types: {pokemon.types.map((type: Type) => type.type.name).join(', ')}</p>
      <p className="text-sm text-gray-600">Height: {pokemon.height} decimetres</p>
      <p className="text-sm text-gray-600">Weight: {pokemon.weight} hectograms</p>
    </div>
  );
};

export default PokemonCard;
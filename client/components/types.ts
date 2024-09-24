// types.ts
export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  front_default: string;
}

export interface Type {
  type: { name: string };
}

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export interface PokemonResult {
  url: string;
}

export interface PokemonDetailsProps {
  nameOrId: string;
}
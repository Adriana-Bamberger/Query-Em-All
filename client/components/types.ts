// types.ts
export interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  front_default: string;
}

export interface PokemonAPI {
    height: any;
    weight: any;
    name: any;
    stats: any[];
    id: any;
    sprites: {
        front_default: string;
        [key: string]: string | null;
    };
}
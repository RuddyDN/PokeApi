export type ResultApi = {
    name: string;
    url: string;
}

export interface Result extends ResultApi {};

export interface PokeApi{
    count: number;
    next: string | undefined;
    //previous: string | null;
    results: ResultApi[];
}


export interface PokemonFont{
    id: number;
    name: string;
    sprites: {
        front_default: string | null;
    }
}
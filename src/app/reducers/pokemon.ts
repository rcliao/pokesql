import { ActionReducer, Action } from '@ngrx/store';

import { Pokemon } from '../models/pokemon';

export const FIND_POKEMON = 'FIND_POKEMON';

export interface AppState {
  pokemon: PokemonState;
};

export interface PokemonState {
  loading: boolean;
  error: string;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
};

export const initialState: PokemonState = {
  loading: false,
  error: '',
  pokemon1: {
    id: 25,
    name: 'Pikachu',
    hp: 42,
    maxHp: 42
  },
  pokemon2: {
    id: 25,
    name: 'Evil Pikachu',
    hp: 42,
    maxHp: 42
  }
};

export const pokemonReducer: ActionReducer<PokemonState> = (state: PokemonState = initialState, action: Action) => {
    switch (action.type) {
        case FIND_POKEMON:
            return Object.assign({}, state, {
              pokemon1: action.payload
            });

        default:
            return state;
    }
};

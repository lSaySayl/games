import { createReducer, on } from '@ngrx/store';
import * as GameActions from '../actions/game.actions';
import { Games } from '../../models/interfaces/game.interface';

export interface GameSate {
  games: Games[];
  loading: boolean;
  error: any;
}

export const initialState: GameSate = {
  games: [],
  loading: false,
  error: null,
};

export const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGames, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(GameActions.loadGamesSucces, (state, { games }) => ({
    ...state,
    games,
    loading: false,
    error: null,
  })),
  on(GameActions.loadGamesFailure, (state, { error }) => ({
    ...state,
    games: [],
    loading: false,
    error,
  }))
);

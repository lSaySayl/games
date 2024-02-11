import { createAction, props } from '@ngrx/store';
import { Games } from '../../models/interfaces/game.interface';

export const loadGames = createAction('[Game] Load Games');
export const loadGamesSucces = createAction(
  '[Game] Load Games Success',
  props<{ games: Games[], loading: boolean }>()
);
export const loadGamesFailure = createAction(
  '[Game] Load Games Failure',
  props<{ error: any }>()
);

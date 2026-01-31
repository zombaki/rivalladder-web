import { createAction, props } from '@ngrx/store';
import { Player } from '../../core/models';

export const loadPlayers = createAction('[Players] Load Players');

export const loadPlayersSuccess = createAction(
  '[Players] Load Players Success',
  props<{ players: Player[] }>()
);

export const loadPlayersFailure = createAction(
  '[Players] Load Players Failure',
  props<{ error: string }>()
);

export const selectPlayer = createAction(
  '[Players] Select Player',
  props<{ playerId: string }>()
);

export const clearSelectedPlayer = createAction('[Players] Clear Selected Player');

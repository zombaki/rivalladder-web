import { createAction, props } from '@ngrx/store';
import { LadderEntry } from '@models/ladder.model';

export const loadLadder = createAction(
  '[Ladder] Load Ladder',
  props<{ clubId: string }>()
);

export const loadLadderSuccess = createAction(
  '[Ladder] Load Ladder Success',
  props<{ entries: LadderEntry[] }>()
);

export const loadLadderFailure = createAction(
  '[Ladder] Load Ladder Failure',
  props<{ error: string }>()
);

export const updateRankings = createAction(
  '[Ladder] Update Rankings',
  props<{ clubId: string }>()
);

export const updateRankingsSuccess = createAction(
  '[Ladder] Update Rankings Success',
  props<{ entries: LadderEntry[] }>()
);

export const updateRankingsFailure = createAction(
  '[Ladder] Update Rankings Failure',
  props<{ error: string }>()
);

export const getUserLadderEntry = createAction(
  '[Ladder] Get User Ladder Entry',
  props<{ userId: string; clubId: string }>()
);

export const getUserLadderEntrySuccess = createAction(
  '[Ladder] Get User Ladder Entry Success',
  props<{ entry: LadderEntry }>()
);

export const getUserLadderEntryFailure = createAction(
  '[Ladder] Get User Ladder Entry Failure',
  props<{ error: string }>()
);

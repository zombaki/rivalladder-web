import { createAction, props } from '@ngrx/store';
import { Match, UpdateMatchScoreDto } from '@models/match.model';

export const loadMatches = createAction(
  '[Match] Load Matches',
  props<{ userId?: string; clubId?: string }>()
);

export const loadMatchesSuccess = createAction(
  '[Match] Load Matches Success',
  props<{ matches: Match[] }>()
);

export const loadMatchesFailure = createAction(
  '[Match] Load Matches Failure',
  props<{ error: string }>()
);

export const loadMatch = createAction(
  '[Match] Load Match',
  props<{ matchId: string }>()
);

export const loadMatchSuccess = createAction(
  '[Match] Load Match Success',
  props<{ match: Match }>()
);

export const loadMatchFailure = createAction(
  '[Match] Load Match Failure',
  props<{ error: string }>()
);

export const updateMatchScore = createAction(
  '[Match] Update Match Score',
  props<{ matchId: string; score: UpdateMatchScoreDto }>()
);

export const updateMatchScoreSuccess = createAction(
  '[Match] Update Match Score Success',
  props<{ match: Match }>()
);

export const updateMatchScoreFailure = createAction(
  '[Match] Update Match Score Failure',
  props<{ error: string }>()
);

export const loadUserMatchHistory = createAction(
  '[Match] Load User Match History',
  props<{ userId: string }>()
);

export const loadUserMatchHistorySuccess = createAction(
  '[Match] Load User Match History Success',
  props<{ matches: Match[] }>()
);

export const loadUserMatchHistoryFailure = createAction(
  '[Match] Load User Match History Failure',
  props<{ error: string }>()
);

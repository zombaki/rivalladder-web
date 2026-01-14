import { createAction, props } from '@ngrx/store';
import { Challenge, CreateChallengeDto } from '@models/challenge.model';

export const loadChallenges = createAction(
  '[Challenge] Load Challenges',
  props<{ userId?: string }>()
);

export const loadChallengesSuccess = createAction(
  '[Challenge] Load Challenges Success',
  props<{ challenges: Challenge[] }>()
);

export const loadChallengesFailure = createAction(
  '[Challenge] Load Challenges Failure',
  props<{ error: string }>()
);

export const createChallenge = createAction(
  '[Challenge] Create Challenge',
  props<{ challenge: CreateChallengeDto }>()
);

export const createChallengeSuccess = createAction(
  '[Challenge] Create Challenge Success',
  props<{ challenge: Challenge }>()
);

export const createChallengeFailure = createAction(
  '[Challenge] Create Challenge Failure',
  props<{ error: string }>()
);

export const respondToChallenge = createAction(
  '[Challenge] Respond To Challenge',
  props<{ challengeId: string; accept: boolean }>()
);

export const respondToChallengeSuccess = createAction(
  '[Challenge] Respond To Challenge Success',
  props<{ challenge: Challenge }>()
);

export const respondToChallengeFailure = createAction(
  '[Challenge] Respond To Challenge Failure',
  props<{ error: string }>()
);

export const validateChallenge = createAction(
  '[Challenge] Validate Challenge',
  props<{ challengerId: string; challengedId: string }>()
);

export const validateChallengeSuccess = createAction(
  '[Challenge] Validate Challenge Success',
  props<{ isValid: boolean; reason?: string }>()
);

export const validateChallengeFailure = createAction(
  '[Challenge] Validate Challenge Failure',
  props<{ error: string }>()
);

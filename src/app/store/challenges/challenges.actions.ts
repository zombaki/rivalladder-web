import { createAction, props } from '@ngrx/store';
import { Challenge, CreateChallengeDto, UpdateChallengeDto } from '../../core/models';

export const loadChallenges = createAction('[Challenges] Load Challenges');

export const loadChallengesSuccess = createAction(
  '[Challenges] Load Challenges Success',
  props<{ challenges: Challenge[] }>()
);

export const loadChallengesFailure = createAction(
  '[Challenges] Load Challenges Failure',
  props<{ error: string }>()
);

export const createChallenge = createAction(
  '[Challenges] Create Challenge',
  props<{ challenge: CreateChallengeDto }>()
);

export const createChallengeSuccess = createAction(
  '[Challenges] Create Challenge Success',
  props<{ challenge: Challenge }>()
);

export const createChallengeFailure = createAction(
  '[Challenges] Create Challenge Failure',
  props<{ error: string }>()
);

export const updateChallenge = createAction(
  '[Challenges] Update Challenge',
  props<{ challengeId: string; update: UpdateChallengeDto }>()
);

export const updateChallengeSuccess = createAction(
  '[Challenges] Update Challenge Success',
  props<{ challenge: Challenge }>()
);

export const updateChallengeFailure = createAction(
  '[Challenges] Update Challenge Failure',
  props<{ error: string }>()
);

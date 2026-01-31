import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChallengesState } from './challenges.reducer';
import { ChallengeStatus } from '../../core/models';

export const selectChallengesState = createFeatureSelector<ChallengesState>('challenges');

export const selectAllChallenges = createSelector(
  selectChallengesState,
  (state) => state.challenges
);

export const selectChallengesLoading = createSelector(
  selectChallengesState,
  (state) => state.isLoading
);

export const selectChallengesError = createSelector(
  selectChallengesState,
  (state) => state.error
);

export const selectPendingChallenges = createSelector(
  selectAllChallenges,
  (challenges) => challenges.filter((c) => c.status === ChallengeStatus.Pending)
);

export const selectActiveChallenges = createSelector(
  selectAllChallenges,
  (challenges) =>
    challenges.filter(
      (c) => c.status === ChallengeStatus.Pending || c.status === ChallengeStatus.Accepted
    )
);

export const selectCompletedChallenges = createSelector(
  selectAllChallenges,
  (challenges) => challenges.filter((c) => c.status === ChallengeStatus.Completed)
);

export const selectChallengesByPlayer = (playerId: string) =>
  createSelector(
    selectAllChallenges,
    (challenges) =>
      challenges.filter(
        (c) => c.challengerId === playerId || c.opponentId === playerId
      )
  );

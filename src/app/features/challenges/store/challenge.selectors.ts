import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChallengeState, selectAll } from './challenge.reducer';

export const selectChallengeState = createFeatureSelector<ChallengeState>('challenge');

export const selectAllChallenges = createSelector(
  selectChallengeState,
  selectAll
);

export const selectChallengeLoading = createSelector(
  selectChallengeState,
  (state) => state.loading
);

export const selectChallengeError = createSelector(
  selectChallengeState,
  (state) => state.error
);

export const selectPendingChallenges = createSelector(
  selectAllChallenges,
  (challenges) => challenges.filter((c) => c.status === 'PENDING')
);

export const selectUserChallenges = (userId: string) =>
  createSelector(selectAllChallenges, (challenges) =>
    challenges.filter(
      (c) => c.challengerId === userId || c.challengedId === userId
    )
  );

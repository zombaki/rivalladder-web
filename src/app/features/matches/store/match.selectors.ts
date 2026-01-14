import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MatchState, selectAll } from './match.reducer';

export const selectMatchState = createFeatureSelector<MatchState>('match');

export const selectAllMatches = createSelector(
  selectMatchState,
  selectAll
);

export const selectMatchLoading = createSelector(
  selectMatchState,
  (state) => state.loading
);

export const selectMatchError = createSelector(
  selectMatchState,
  (state) => state.error
);

export const selectUserMatches = (userId: string) =>
  createSelector(selectAllMatches, (matches) =>
    matches.filter(
      (m) => m.player1Id === userId || m.player2Id === userId
    )
  );

export const selectCompletedMatches = createSelector(
  selectAllMatches,
  (matches) => matches.filter((m) => m.status === 'COMPLETED')
);

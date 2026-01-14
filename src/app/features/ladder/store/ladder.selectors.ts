import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LadderState, selectAll } from './ladder.reducer';

export const selectLadderState = createFeatureSelector<LadderState>('ladder');

export const selectAllLadderEntries = createSelector(
  selectLadderState,
  selectAll
);

export const selectLadderLoading = createSelector(
  selectLadderState,
  (state) => state.loading
);

export const selectLadderError = createSelector(
  selectLadderState,
  (state) => state.error
);

export const selectUserLadderEntry = (userId: string) =>
  createSelector(selectAllLadderEntries, (entries) =>
    entries.find((entry) => entry.userId === userId)
  );

export const selectTop10 = createSelector(
  selectAllLadderEntries,
  (entries) => entries.slice(0, 10)
);

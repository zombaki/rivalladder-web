import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, selectAll } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectAllUsers = createSelector(
  selectUserState,
  selectAll
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);

export const selectUserById = (userId: string) =>
  createSelector(selectAllUsers, (users) =>
    users.find((user) => user.id === userId)
  );

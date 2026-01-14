import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserProfile } from '@models/user.model';
import * as UserActions from './user.actions';

export interface UserState extends EntityState<UserProfile> {
  selectedUserId: string | null;
  loading: boolean;
  error: string | null;
}

export const userAdapter: EntityAdapter<UserProfile> = createEntityAdapter<UserProfile>();

export const initialState: UserState = userAdapter.getInitialState({
  selectedUserId: null,
  loading: false,
  error: null
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, UserActions.loadUserProfile, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loading: false })
  ),
  on(UserActions.loadUserProfileSuccess, (state, { user }) =>
    userAdapter.upsertOne(user, { ...state, loading: false, selectedUserId: user.id })
  ),
  on(UserActions.updateUserProfileSuccess, (state, { user }) =>
    userAdapter.updateOne({ id: user.id, changes: user }, { ...state, loading: false })
  ),
  on(UserActions.loadUsersFailure, UserActions.loadUserProfileFailure, UserActions.updateUserProfileFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = userAdapter.getSelectors();

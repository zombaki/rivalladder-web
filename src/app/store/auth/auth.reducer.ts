import { createReducer, on } from '@ngrx/store';
import { AuthUser } from '../../core/models';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    isLoading: true
  })),
  on(AuthActions.logoutSuccess, () => ({
    ...initialState
  })),
  on(AuthActions.loadCurrentUser, (state) => ({
    ...state,
    isLoading: true
  })),
  on(AuthActions.loadCurrentUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    isLoading: false
  })),
  on(AuthActions.loadCurrentUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

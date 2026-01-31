import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { authReducer } from './auth/auth.reducer';
import { playersReducer } from './players/players.reducer';
import { challengesReducer } from './challenges/challenges.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  players: playersReducer,
  challenges: challengesReducer
};

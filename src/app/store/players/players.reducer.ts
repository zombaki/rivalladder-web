import { createReducer, on } from '@ngrx/store';
import { Player } from '../../core/models';
import * as PlayersActions from './players.actions';

export interface PlayersState {
  players: Player[];
  selectedPlayerId: string | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: PlayersState = {
  players: [],
  selectedPlayerId: null,
  isLoading: false,
  error: null
};

export const playersReducer = createReducer(
  initialState,
  on(PlayersActions.loadPlayers, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(PlayersActions.loadPlayersSuccess, (state, { players }) => ({
    ...state,
    players,
    isLoading: false,
    error: null
  })),
  on(PlayersActions.loadPlayersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(PlayersActions.selectPlayer, (state, { playerId }) => ({
    ...state,
    selectedPlayerId: playerId
  })),
  on(PlayersActions.clearSelectedPlayer, (state) => ({
    ...state,
    selectedPlayerId: null
  }))
);

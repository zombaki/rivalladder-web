import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayersState } from './players.reducer';

export const selectPlayersState = createFeatureSelector<PlayersState>('players');

export const selectAllPlayers = createSelector(
  selectPlayersState,
  (state) => state.players
);

export const selectPlayersLoading = createSelector(
  selectPlayersState,
  (state) => state.isLoading
);

export const selectPlayersError = createSelector(
  selectPlayersState,
  (state) => state.error
);

export const selectSelectedPlayerId = createSelector(
  selectPlayersState,
  (state) => state.selectedPlayerId
);

export const selectSelectedPlayer = createSelector(
  selectAllPlayers,
  selectSelectedPlayerId,
  (players, selectedId) => players.find((p) => p.id === selectedId) || null
);

export const selectPlayersByRank = createSelector(
  selectAllPlayers,
  (players) => [...players].sort((a, b) => a.currentRank - b.currentRank)
);

export const selectPlayerById = (playerId: string) =>
  createSelector(
    selectAllPlayers,
    (players) => players.find((p) => p.id === playerId) || null
  );

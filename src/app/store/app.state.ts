import { AuthState } from './auth/auth.reducer';
import { PlayersState } from './players/players.reducer';
import { ChallengesState } from './challenges/challenges.reducer';

// Define your application state interface here
export interface AppState {
  auth: AuthState;
  players: PlayersState;
  challenges: ChallengesState;
}

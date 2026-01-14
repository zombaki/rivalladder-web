import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';

// Import feature reducers
import * as fromAuth from '../features/auth/store/auth.reducer';
import * as fromUser from '../features/users/store/user.reducer';
import * as fromClub from '../features/clubs/store/club.reducer';
import * as fromLadder from '../features/ladder/store/ladder.reducer';
import * as fromChallenge from '../features/challenges/store/challenge.reducer';
import * as fromMatch from '../features/matches/store/match.reducer';

export interface AppState {
  auth: fromAuth.AuthState;
  user: fromUser.UserState;
  club: fromClub.ClubState;
  ladder: fromLadder.LadderState;
  challenge: fromChallenge.ChallengeState;
  match: fromMatch.MatchState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  user: fromUser.userReducer,
  club: fromClub.clubReducer,
  ladder: fromLadder.ladderReducer,
  challenge: fromChallenge.challengeReducer,
  match: fromMatch.matchReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

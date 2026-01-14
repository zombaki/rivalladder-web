import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Challenge } from '@models/challenge.model';
import * as ChallengeActions from './challenge.actions';

export interface ChallengeState extends EntityState<Challenge> {
  loading: boolean;
  error: string | null;
}

export const challengeAdapter: EntityAdapter<Challenge> = createEntityAdapter<Challenge>({
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
});

export const initialState: ChallengeState = challengeAdapter.getInitialState({
  loading: false,
  error: null
});

export const challengeReducer = createReducer(
  initialState,
  on(ChallengeActions.loadChallenges, ChallengeActions.createChallenge, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ChallengeActions.loadChallengesSuccess, (state, { challenges }) =>
    challengeAdapter.setAll(challenges, { ...state, loading: false })
  ),
  on(ChallengeActions.createChallengeSuccess, (state, { challenge }) =>
    challengeAdapter.addOne(challenge, { ...state, loading: false })
  ),
  on(ChallengeActions.respondToChallengeSuccess, (state, { challenge }) =>
    challengeAdapter.updateOne({ id: challenge.id, changes: challenge }, { ...state, loading: false })
  ),
  on(ChallengeActions.loadChallengesFailure, ChallengeActions.createChallengeFailure, ChallengeActions.respondToChallengeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = challengeAdapter.getSelectors();

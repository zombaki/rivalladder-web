import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Match } from '@models/match.model';
import * as MatchActions from './match.actions';

export interface MatchState extends EntityState<Match> {
  loading: boolean;
  error: string | null;
}

export const matchAdapter: EntityAdapter<Match> = createEntityAdapter<Match>({
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
});

export const initialState: MatchState = matchAdapter.getInitialState({
  loading: false,
  error: null
});

export const matchReducer = createReducer(
  initialState,
  on(MatchActions.loadMatches, MatchActions.updateMatchScore, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(MatchActions.loadMatchesSuccess, (state, { matches }) =>
    matchAdapter.setAll(matches, { ...state, loading: false })
  ),
  on(MatchActions.loadMatchSuccess, (state, { match }) =>
    matchAdapter.upsertOne(match, { ...state, loading: false })
  ),
  on(MatchActions.updateMatchScoreSuccess, (state, { match }) =>
    matchAdapter.updateOne({ id: match.id, changes: match }, { ...state, loading: false })
  ),
  on(MatchActions.loadMatchesFailure, MatchActions.loadMatchFailure, MatchActions.updateMatchScoreFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = matchAdapter.getSelectors();

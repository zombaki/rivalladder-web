import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { LadderEntry } from '@models/ladder.model';
import * as LadderActions from './ladder.actions';

export interface LadderState extends EntityState<LadderEntry> {
  selectedClubId: string | null;
  loading: boolean;
  error: string | null;
}

export const ladderAdapter: EntityAdapter<LadderEntry> = createEntityAdapter<LadderEntry>({
  sortComparer: (a, b) => a.rank - b.rank
});

export const initialState: LadderState = ladderAdapter.getInitialState({
  selectedClubId: null,
  loading: false,
  error: null
});

export const ladderReducer = createReducer(
  initialState,
  on(LadderActions.loadLadder, (state, { clubId }) => ({
    ...state,
    selectedClubId: clubId,
    loading: true,
    error: null
  })),
  on(LadderActions.loadLadderSuccess, (state, { entries }) =>
    ladderAdapter.setAll(entries, { ...state, loading: false })
  ),
  on(LadderActions.loadLadderFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(LadderActions.updateRankingsSuccess, (state, { entries }) =>
    ladderAdapter.upsertMany(entries, state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } = ladderAdapter.getSelectors();

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Club } from '@models/club.model';
import * as ClubActions from './club.actions';

export interface ClubState extends EntityState<Club> {
  selectedClubId: string | null;
  loading: boolean;
  error: string | null;
}

export const clubAdapter: EntityAdapter<Club> = createEntityAdapter<Club>();

export const initialState: ClubState = clubAdapter.getInitialState({
  selectedClubId: null,
  loading: false,
  error: null
});

export const clubReducer = createReducer(
  initialState,
  on(ClubActions.loadClubs, ClubActions.loadClub, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ClubActions.loadClubsSuccess, (state, { clubs }) =>
    clubAdapter.setAll(clubs, { ...state, loading: false })
  ),
  on(ClubActions.loadClubSuccess, (state, { club }) =>
    clubAdapter.upsertOne(club, { ...state, loading: false, selectedClubId: club.id })
  ),
  on(ClubActions.updateClubSuccess, (state, { club }) =>
    clubAdapter.updateOne({ id: club.id, changes: club }, { ...state, loading: false })
  ),
  on(ClubActions.loadClubsFailure, ClubActions.loadClubFailure, ClubActions.updateClubFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = clubAdapter.getSelectors();

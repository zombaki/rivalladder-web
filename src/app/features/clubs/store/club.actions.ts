import { createAction, props } from '@ngrx/store';
import { Club, CreateClubDto, UpdateClubDto } from '@models/club.model';

export const loadClubs = createAction('[Club] Load Clubs');

export const loadClubsSuccess = createAction(
  '[Club] Load Clubs Success',
  props<{ clubs: Club[] }>()
);

export const loadClubsFailure = createAction(
  '[Club] Load Clubs Failure',
  props<{ error: string }>()
);

export const loadClub = createAction(
  '[Club] Load Club',
  props<{ clubId: string }>()
);

export const loadClubSuccess = createAction(
  '[Club] Load Club Success',
  props<{ club: Club }>()
);

export const loadClubFailure = createAction(
  '[Club] Load Club Failure',
  props<{ error: string }>()
);

export const createClub = createAction(
  '[Club] Create Club',
  props<{ club: CreateClubDto }>()
);

export const createClubSuccess = createAction(
  '[Club] Create Club Success',
  props<{ club: Club }>()
);

export const createClubFailure = createAction(
  '[Club] Create Club Failure',
  props<{ error: string }>()
);

export const updateClub = createAction(
  '[Club] Update Club',
  props<{ clubId: string; updates: UpdateClubDto }>()
);

export const updateClubSuccess = createAction(
  '[Club] Update Club Success',
  props<{ club: Club }>()
);

export const updateClubFailure = createAction(
  '[Club] Update Club Failure',
  props<{ error: string }>()
);

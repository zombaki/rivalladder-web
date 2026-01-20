import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as ClubActions from './club.actions';
import { ClubService } from '../services/club.service';

@Injectable()
export class ClubEffects {
  loadClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClubActions.loadClubs),
      switchMap(() =>
        this.clubService.getClubs().pipe(
          map((clubs) =>
            ClubActions.loadClubsSuccess({ clubs })
          ),
          catchError((error) =>
            of(ClubActions.loadClubsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadClub$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClubActions.loadClub),
      switchMap(({ clubId }) =>
        this.clubService.getClub(clubId).pipe(
          map((club) =>
            club
              ? ClubActions.loadClubSuccess({ club })
              : ClubActions.loadClubFailure({ error: 'Club not found' })
          ),
          catchError((error) =>
            of(ClubActions.loadClubFailure({ error: error.message }))
          )
        )
      )
    )
  );

  createClub$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClubActions.createClub),
      switchMap(({ club }) =>
        this.clubService.createClub(club).pipe(
          map((createdClub) =>
            ClubActions.createClubSuccess({ club: createdClub })
          ),
          catchError((error) =>
            of(ClubActions.createClubFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updateClub$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClubActions.updateClub),
      switchMap(({ clubId, updates }) =>
        this.clubService.updateClub(clubId, updates).pipe(
          map((club) =>
            ClubActions.updateClubSuccess({ club })
          ),
          catchError((error) =>
            of(ClubActions.updateClubFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private clubService: ClubService
  ) {}
}

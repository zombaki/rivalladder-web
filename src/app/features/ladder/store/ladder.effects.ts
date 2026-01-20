import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as LadderActions from './ladder.actions';
import { LadderService } from '../services/ladder.service';

@Injectable()
export class LadderEffects {
  loadLadder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LadderActions.loadLadder),
      switchMap(({ clubId }) =>
        this.ladderService.getLadder(clubId).pipe(
          map((entries) =>
            LadderActions.loadLadderSuccess({ entries })
          ),
          catchError((error) =>
            of(LadderActions.loadLadderFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updateRankings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LadderActions.updateRankings),
      switchMap(({ clubId }) =>
        this.ladderService.updateRankings(clubId).pipe(
          map((entries) =>
            LadderActions.updateRankingsSuccess({ entries })
          ),
          catchError((error) =>
            of(LadderActions.updateRankingsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  getUserLadderEntry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LadderActions.getUserLadderEntry),
      switchMap(({ userId, clubId }) =>
        this.ladderService.getUserLadderEntry(userId, clubId).pipe(
          map((entry) =>
            entry
              ? LadderActions.getUserLadderEntrySuccess({ entry })
              : LadderActions.getUserLadderEntryFailure({ error: 'Entry not found' })
          ),
          catchError((error) =>
            of(LadderActions.getUserLadderEntryFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ladderService: LadderService
  ) {}
}

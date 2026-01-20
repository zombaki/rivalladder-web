import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as MatchActions from './match.actions';
import { MatchService } from '../services/match.service';

@Injectable()
export class MatchEffects {
  loadMatches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MatchActions.loadMatches),
      switchMap(({ userId, clubId }) =>
        this.matchService.getMatches(userId, clubId).pipe(
          map((matches) =>
            MatchActions.loadMatchesSuccess({ matches })
          ),
          catchError((error) =>
            of(MatchActions.loadMatchesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadMatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MatchActions.loadMatch),
      switchMap(({ matchId }) =>
        this.matchService.getMatch(matchId).pipe(
          map((match) =>
            match
              ? MatchActions.loadMatchSuccess({ match })
              : MatchActions.loadMatchFailure({ error: 'Match not found' })
          ),
          catchError((error) =>
            of(MatchActions.loadMatchFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updateMatchScore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MatchActions.updateMatchScore),
      switchMap(({ matchId, score }) =>
        this.matchService.updateMatchScore(matchId, score).pipe(
          map((match) =>
            MatchActions.updateMatchScoreSuccess({ match })
          ),
          catchError((error) =>
            of(MatchActions.updateMatchScoreFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private matchService: MatchService
  ) {}
}

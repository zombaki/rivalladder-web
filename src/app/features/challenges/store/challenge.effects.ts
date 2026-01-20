import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as ChallengeActions from './challenge.actions';
import { ChallengeService } from '../services/challenge.service';

@Injectable()
export class ChallengeEffects {
  loadChallenges$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChallengeActions.loadChallenges),
      switchMap(({ userId }) =>
        this.challengeService.getChallenges(userId).pipe(
          map((challenges) =>
            ChallengeActions.loadChallengesSuccess({ challenges })
          ),
          catchError((error) =>
            of(ChallengeActions.loadChallengesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  createChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChallengeActions.createChallenge),
      switchMap(({ challenge }) =>
        this.challengeService.createChallenge(challenge).pipe(
          map((createdChallenge) =>
            ChallengeActions.createChallengeSuccess({ challenge: createdChallenge })
          ),
          catchError((error) =>
            of(ChallengeActions.createChallengeFailure({ error: error.message }))
          )
        )
      )
    )
  );

  respondToChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChallengeActions.respondToChallenge),
      switchMap(({ challengeId, accept }) =>
        this.challengeService.respondToChallenge(challengeId, { accept }).pipe(
          map((challenge) =>
            ChallengeActions.respondToChallengeSuccess({ challenge })
          ),
          catchError((error) =>
            of(ChallengeActions.respondToChallengeFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private challengeService: ChallengeService
  ) {}
}

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import * as ChallengesActions from './challenges.actions';
import { MockData } from '../../core/data/mock-data';
import { Challenge, ChallengeStatus } from '../../core/models';

@Injectable()
export class ChallengesEffects {
  private actions$ = inject(Actions);

  loadChallenges$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChallengesActions.loadChallenges),
      delay(500),
      map(() => {
        const challenges = MockData.CHALLENGES;
        return ChallengesActions.loadChallengesSuccess({ challenges });
      }),
      catchError((error) =>
        of(ChallengesActions.loadChallengesFailure({ error: error.message || 'Failed to load challenges' }))
      )
    )
  );

  createChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChallengesActions.createChallenge),
      delay(500),
      map(({ challenge: dto }) => {
        // Create a new challenge from the DTO
        const newChallenge: Challenge = {
          id: `challenge-${Date.now()}`,
          challengerId: dto.challengerId,
          challengerName: 'Current User', // Would come from state
          challengerRank: 5,
          opponentId: dto.opponentId,
          opponentName: 'Opponent', // Would be looked up
          opponentRank: 3,
          status: ChallengeStatus.Pending,
          createdDate: new Date(),
          scheduledDate: dto.scheduledDate,
          notes: dto.notes
        };
        return ChallengesActions.createChallengeSuccess({ challenge: newChallenge });
      }),
      catchError((error) =>
        of(ChallengesActions.createChallengeFailure({ error: error.message || 'Failed to create challenge' }))
      )
    )
  );

  updateChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChallengesActions.updateChallenge),
      delay(500),
      map(({ challengeId, update }) => {
        // Mock update - in real app would call API
        const existingChallenge = MockData.CHALLENGES.find(c => c.id === challengeId);
        if (!existingChallenge) {
          throw new Error('Challenge not found');
        }
        
        const updatedChallenge: Challenge = {
          ...existingChallenge,
          ...update
        };
        return ChallengesActions.updateChallengeSuccess({ challenge: updatedChallenge });
      }),
      catchError((error) =>
        of(ChallengesActions.updateChallengeFailure({ error: error.message || 'Failed to update challenge' }))
      )
    )
  );
}

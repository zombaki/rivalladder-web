import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import * as PlayersActions from './players.actions';
import { MockData } from '../../core/data/mock-data';

@Injectable()
export class PlayersEffects {
  private actions$ = inject(Actions);

  loadPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayersActions.loadPlayers),
      delay(500), // Simulate API call
      map(() => {
        // Return mock players data
        const players = MockData.PLAYERS;
        return PlayersActions.loadPlayersSuccess({ players });
      }),
      catchError((error) =>
        of(PlayersActions.loadPlayersFailure({ error: error.message || 'Failed to load players' }))
      )
    )
  );
}

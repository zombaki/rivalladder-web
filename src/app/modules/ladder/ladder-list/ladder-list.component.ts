import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../../../core/models';
import * as PlayersActions from '../../../store/players/players.actions';
import * as PlayersSelectors from '../../../store/players/players.selectors';
import * as AuthSelectors from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-ladder-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './ladder-list.component.html',
  styleUrl: './ladder-list.component.scss'
})
export class LadderListComponent implements OnInit {
  players$: Observable<Player[]>;
  isLoading$: Observable<boolean>;
  currentUserId$: Observable<string | undefined>;

  displayedColumns: string[] = ['rank', 'rankChange', 'player', 'record', 'streak', 'actions'];

  constructor(private store: Store) {
    this.players$ = this.store.select(PlayersSelectors.selectPlayersByRank);
    this.isLoading$ = this.store.select(PlayersSelectors.selectPlayersLoading);
    this.currentUserId$ = this.store.select(AuthSelectors.selectUserId);
  }

  ngOnInit(): void {
    this.store.dispatch(PlayersActions.loadPlayers());
  }

  getRankChange(player: Player): number {
    return player.previousRank - player.currentRank;
  }

  getRankChangeIcon(change: number): string {
    if (change > 0) return 'arrow_upward';
    if (change < 0) return 'arrow_downward';
    return 'remove';
  }

  getRankChangeColor(change: number): string {
    if (change > 0) return 'success';
    if (change < 0) return 'warn';
    return '';
  }

  canChallenge(player: Player, currentUserId: string | undefined): boolean {
    if (!currentUserId || player.userId === currentUserId) return false;
    // Can challenge players within 3 ranks (example rule)
    const currentPlayer = this.getCurrentPlayer(currentUserId);
    if (!currentPlayer) return false;
    const rankDiff = Math.abs(currentPlayer.currentRank - player.currentRank);
    return rankDiff > 0 && rankDiff <= 3;
  }

  private getCurrentPlayer(userId: string): Player | undefined {
    let currentPlayer: Player | undefined;
    this.players$.subscribe(players => {
      currentPlayer = players.find(p => p.userId === userId);
    }).unsubscribe();
    return currentPlayer;
  }

  challengePlayer(player: Player): void {
    // Navigate to challenge creation with player pre-selected
    console.log('Challenge player:', player);
  }
}

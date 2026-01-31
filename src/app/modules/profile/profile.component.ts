import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { User, Player, Challenge } from '../../core/models';
import * as AuthSelectors from '../../store/auth/auth.selectors';
import * as PlayersSelectors from '../../store/players/players.selectors';
import * as ChallengesSelectors from '../../store/challenges/challenges.selectors';
import * as PlayersActions from '../../store/players/players.actions';
import * as ChallengesActions from '../../store/challenges/challenges.actions';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  currentUser$: Observable<User | null>;
  currentPlayer$: Observable<Player | null>;
  myChallenges$: Observable<Challenge[]>;
  stats$: Observable<{totalMatches: number; winRate: string; rankChange: number} | null>;
  Math = Math;

  constructor(private store: Store) {
    this.currentUser$ = this.store.select(AuthSelectors.selectCurrentUser);
    
    this.currentPlayer$ = combineLatest([
      this.currentUser$,
      this.store.select(PlayersSelectors.selectAllPlayers)
    ]).pipe(
      map(([user, players]: [User | null, Player[]]) => {
        if (!user) return null;
        return players.find(p => p.userId === user.id) || null;
      })
    );

    this.myChallenges$ = combineLatest([
      this.currentPlayer$,
      this.store.select(ChallengesSelectors.selectAllChallenges)
    ]).pipe(
      map(([player, challenges]: [Player | null, Challenge[]]) => {
        if (!player) return [];
        return challenges.filter(
          c => c.challengerId === player.id || c.opponentId === player.id
        );
      })
    );

    this.stats$ = combineLatest([this.currentPlayer$]).pipe(
      map(([player]) => {
        if (!player) return null;
        const totalMatches = player.wins + player.losses;
        const winRate = totalMatches > 0 ? (player.wins / totalMatches) * 100 : 0;
        return {
          totalMatches,
          winRate: winRate.toFixed(1),
          rankChange: player.previousRank - player.currentRank
        };
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(PlayersActions.loadPlayers());
    this.store.dispatch(ChallengesActions.loadChallenges());
  }

  getMembershipDuration(memberSince: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(memberSince).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''}`;
    return `${days} day${days > 1 ? 's' : ''}`;
  }
}

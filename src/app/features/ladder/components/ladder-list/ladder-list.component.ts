import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LadderEntry } from '@models/ladder.model';
import * as LadderActions from '../../store/ladder.actions';
import * as ChallengeActions from '../../../challenges/store/challenge.actions';
import { selectAllLadderEntries, selectLadderLoading } from '../../store/ladder.selectors';
import { selectUser } from '@features/auth/store/auth.selectors';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ladder-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,MatProgressSpinnerModule
  ],
  templateUrl: './ladder-list.component.html',
  styleUrls: ['./ladder-list.component.scss']
})
export class LadderListComponent implements OnInit {
  ladderEntries$: Observable<LadderEntry[]>;
  loading$: Observable<boolean>;
  currentUser$ = this.store.select(selectUser);
  
  displayedColumns: string[] = ['rank', 'player', 'stats', 'streak', 'actions'];

  constructor(private store: Store) {
    this.ladderEntries$ = this.store.select(selectAllLadderEntries);
    this.loading$ = this.store.select(selectLadderLoading);
  }

  ngOnInit(): void {
    // Load ladder for current user's club
    this.currentUser$.subscribe(user => {
      if (user?.clubId) {
        this.store.dispatch(LadderActions.loadLadder({ clubId: user.clubId }));
      }
    });
  }

  challengePlayer(entry: LadderEntry): void {
    this.store.dispatch(ChallengeActions.createChallenge({ 
      challenge: { challengedId: entry.userId } 
    }));
  }

  canChallenge(entry: LadderEntry, currentUserId: string | undefined): boolean {
    if (!currentUserId || entry.userId === currentUserId) {
      return false;
    }
    // Add logic to check rank difference and other constraints
    return true;
  }

  getRankBadgeClass(rank: number): string {
    if (rank <= 3) return 'rank-badge top-3';
    if (rank <= 10) return 'rank-badge top-10';
    return 'rank-badge other';
  }

  getWinPercentage(wins: number, losses: number): number {
    const total = wins + losses;
    return total > 0 ? Math.round((wins / total) * 100) : 0;
  }
}

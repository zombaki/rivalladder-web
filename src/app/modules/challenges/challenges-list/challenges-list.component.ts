import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Challenge, ChallengeStatus } from '../../../core/models';
import * as ChallengesActions from '../../../store/challenges/challenges.actions';
import * as ChallengesSelectors from '../../../store/challenges/challenges.selectors';
import * as AuthSelectors from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-challenges-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './challenges-list.component.html',
  styleUrl: './challenges-list.component.scss'
})
export class ChallengesListComponent implements OnInit {
  activeChallenges$: Observable<Challenge[]>;
  completedChallenges$: Observable<Challenge[]>;
  isLoading$: Observable<boolean>;
  currentUserId$: Observable<string | undefined>;

  constructor(private store: Store) {
    this.activeChallenges$ = this.store.select(ChallengesSelectors.selectActiveChallenges);
    this.completedChallenges$ = this.store.select(ChallengesSelectors.selectCompletedChallenges);
    this.isLoading$ = this.store.select(ChallengesSelectors.selectChallengesLoading);
    this.currentUserId$ = this.store.select(AuthSelectors.selectUserId);
  }

  ngOnInit(): void {
    this.store.dispatch(ChallengesActions.loadChallenges());
  }

  getStatusColor(status: ChallengeStatus): string {
    switch (status) {
      case ChallengeStatus.Pending:
        return 'warn';
      case ChallengeStatus.Accepted:
        return 'primary';
      case ChallengeStatus.Completed:
        return 'accent';
      default:
        return '';
    }
  }

  acceptChallenge(challenge: Challenge): void {
    this.store.dispatch(
      ChallengesActions.updateChallenge({
        challengeId: challenge.id,
        update: { status: ChallengeStatus.Accepted, acceptedDate: new Date() }
      })
    );
  }

  declineChallenge(challenge: Challenge): void {
    this.store.dispatch(
      ChallengesActions.updateChallenge({
        challengeId: challenge.id,
        update: { status: ChallengeStatus.Declined }
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { Challenge } from '@models/challenge.model';
import * as ChallengeActions from '../../store/challenge.actions';
import { selectAllChallenges, selectChallengeLoading } from '../../store/challenge.selectors';
import { selectUser } from '@features/auth/store/auth.selectors';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-challenge-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,MatProgressSpinnerModule
  ],
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {
  challenges$: Observable<Challenge[]>;
  loading$: Observable<boolean>;
  currentUser$ = this.store.select(selectUser);

  constructor(private store: Store) {
    this.challenges$ = this.store.select(selectAllChallenges);
    this.loading$ = this.store.select(selectChallengeLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(ChallengeActions.loadChallenges({}));
  }

  acceptChallenge(challengeId: string): void {
    this.store.dispatch(ChallengeActions.respondToChallenge({ 
      challengeId, 
      accept: true 
    }));
  }

  declineChallenge(challengeId: string): void {
    this.store.dispatch(ChallengeActions.respondToChallenge({ 
      challengeId, 
      accept: false 
    }));
  }

  isIncomingChallenge(challenge: Challenge, currentUserId: string | undefined): boolean {
    return challenge.challengedId === currentUserId;
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }
}

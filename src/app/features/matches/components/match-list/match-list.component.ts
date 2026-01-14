import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { Match } from '@models/match.model';
import * as MatchActions from '../../store/match.actions';
import { selectAllMatches, selectMatchLoading } from '../../store/match.selectors';
import { selectUser } from '@features/auth/store/auth.selectors';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-match-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,MatProgressSpinnerModule
  ],
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  matches$: Observable<Match[]>;
  loading$: Observable<boolean>;
  currentUser$ = this.store.select(selectUser);

  constructor(private store: Store) {
    this.matches$ = this.store.select(selectAllMatches);
    this.loading$ = this.store.select(selectMatchLoading);
  }

  ngOnInit(): void {
    this.currentUser$.subscribe(user => {
      if (user) {
        this.store.dispatch(MatchActions.loadMatches({ userId: user.id }));
      }
    });
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  isWinner(match: Match, userId: string | undefined): boolean {
    return match.winnerId === userId;
  }
}

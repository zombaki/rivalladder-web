import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { selectUser } from '@features/auth/store/auth.selectors';
import { selectUserLadderEntry } from '@features/ladder/store/ladder.selectors';
import { selectUserChallenges, selectPendingChallenges } from '@features/challenges/store/challenge.selectors';
import { selectUserMatches } from '@features/matches/store/match.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$ = this.store.select(selectUser);
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        // Load user-specific data
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../../core/models';
import * as AuthSelectors from '../../../../store/auth/auth.selectors';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentUser$: Observable<User | null>;

  quickActions = [
    { icon: 'leaderboard', label: 'View Ladder', route: '/dashboard/ladder', color: '#673ab7' },
    { icon: 'add_circle', label: 'New Challenge', route: '/dashboard/challenges', color: '#4caf50' },
    { icon: 'person', label: 'My Profile', route: '/dashboard/profile', color: '#ff9800' }
  ];

  constructor(private store: Store) {
    this.currentUser$ = this.store.select(AuthSelectors.selectCurrentUser);
  }

  ngOnInit(): void {}
}

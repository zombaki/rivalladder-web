import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as MatchActions from '../../store/match.actions';

@Component({
  selector: 'app-score-entry',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.scss']
})
export class ScoreEntryComponent implements OnInit {
  scoreForm!: FormGroup;
  matchId: string = '';

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matchId = this.route.snapshot.paramMap.get('id') || '';
    
    this.scoreForm = this.fb.group({
      player1Score: ['', [Validators.required, Validators.min(0)]],
      player2Score: ['', [Validators.required, Validators.min(0)]],
      notes: ['']
    });

    if (this.matchId) {
      this.store.dispatch(MatchActions.loadMatch({ matchId: this.matchId }));
    }
  }

  onSubmit(): void {
    if (this.scoreForm.valid) {
      this.store.dispatch(MatchActions.updateMatchScore({
        matchId: this.matchId,
        score: this.scoreForm.value
      }));
      this.router.navigate(['/matches']);
    }
  }
}

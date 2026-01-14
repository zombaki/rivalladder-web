import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { selectUser } from '@features/auth/store/auth.selectors';
import * as UserActions from '../../store/user.actions';

@Component({
  selector: 'app-user-profile',
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
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user$ = this.store.select(selectUser);
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      bio: [''],
      skillLevel: ['']
    });

    this.user$.subscribe(user => {
      if (user) {
        this.profileForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName
        });
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  uploadPhoto(): void {
    if (this.selectedFile) {
      this.user$.subscribe(user => {
        if (user) {
          this.store.dispatch(UserActions.uploadUserPhoto({
            userId: user.id,
            file: this.selectedFile!
          }));
        }
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.user$.subscribe(user => {
        if (user) {
          this.store.dispatch(UserActions.updateUserProfile({
            userId: user.id,
            updates: this.profileForm.value
          }));
        }
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, delay, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { MockData } from '../../core/data/mock-data';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      delay(1000), // Simulate API call
      map(({ email, password }) => {
        // Mock authentication logic
        const user = MockData.USERS.find((u) => u.email === email);

        if (user && password.length >= 6) {
          // Store token in localStorage
          localStorage.setItem('auth_token', user.token);
          localStorage.setItem('user_id', user.id);
          return AuthActions.loginSuccess({ user });
        } else {
          return AuthActions.loginFailure({ error: 'Invalid email or password' });
        }
      }),
      catchError((error) =>
        of(AuthActions.loginFailure({ error: error.message || 'Login failed' }))
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        // Clear localStorage
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_id');
        return AuthActions.logoutSuccess();
      })
    )
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logoutSuccess),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadCurrentUser),
      delay(500),
      map(() => {
        const token = localStorage.getItem('auth_token');
        const userId = localStorage.getItem('user_id');

        if (token && userId) {
          const user = MockData.USERS.find((u) => u.id === userId);
          if (user) {
            return AuthActions.loadCurrentUserSuccess({ user });
          }
        }
        return AuthActions.loadCurrentUserFailure({ error: 'No user found' });
      }),
      catchError((error) =>
        of(AuthActions.loadCurrentUserFailure({ error: error.message }))
      )
    )
  );

  constructor(private actions$: Actions, private router: Router) {}
}

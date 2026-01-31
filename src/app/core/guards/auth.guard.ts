import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AuthSelectors from '../store/auth/auth.selectors';
import * as AuthActions from '../store/auth/auth.actions';

export const authGuard = () => {
  const store = inject(Store);
  const router = inject(Router);

  // Try to load current user from localStorage
  store.dispatch(AuthActions.loadCurrentUser());

  return store.select(AuthSelectors.selectIsAuthenticated).pipe(
    take(2), // Take twice to allow for async load
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};

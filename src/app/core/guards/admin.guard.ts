import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectCurrentUser, selectIsAuthenticated } from '../../store/auth/auth.selectors';
import { UserRole } from '../models';

export const adminGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectCurrentUser).pipe(
    map((user) => {
      const isAdmin = user?.role === UserRole.Admin || user?.role === UserRole.SuperAdmin;
      
      if (!user) {
        // Not authenticated, redirect to admin login
        router.navigate(['/admin-login']);
        return false;
      }
      
      if (!isAdmin) {
        // Authenticated but not admin, redirect to regular dashboard
        router.navigate(['/dashboard']);
        return false;
      }
      
      return true;
    })
  );
};

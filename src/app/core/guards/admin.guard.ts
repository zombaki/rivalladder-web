import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectIsAdmin } from '@features/auth/store/auth.selectors';

export const adminGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectIsAdmin).pipe(
    map((isAdmin) => {
      if (!isAdmin) {
        router.navigate(['/dashboard']);
        return false;
      }
      return true;
    })
  );
};

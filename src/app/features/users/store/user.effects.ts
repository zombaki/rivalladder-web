import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(({ clubId }) =>
        this.userService.getUsers(clubId).pipe(
          map((users) =>
            UserActions.loadUsersSuccess({ users })
          ),
          catchError((error) =>
            of(UserActions.loadUsersFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserProfile),
      switchMap(({ userId }) =>
        this.userService.getUserProfile(userId).pipe(
          map((user) =>
            user
              ? UserActions.loadUserProfileSuccess({ user })
              : UserActions.loadUserProfileFailure({ error: 'User not found' })
          ),
          catchError((error) =>
            of(UserActions.loadUserProfileFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUserProfile),
      switchMap(({ userId, updates }) =>
        this.userService.updateUser(userId, updates).pipe(
          map((user) =>
            UserActions.updateUserProfileSuccess({ user })
          ),
          catchError((error) =>
            of(UserActions.updateUserProfileFailure({ error: error.message }))
          )
        )
      )
    )
  );

  uploadUserPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.uploadUserPhoto),
      switchMap(({ userId, file }) =>
        this.userService.uploadPhoto(userId, file).pipe(
          map((photoUrl) =>
            UserActions.uploadUserPhotoSuccess({ userId, photoUrl })
          ),
          catchError((error) =>
            of(UserActions.uploadUserPhotoFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}

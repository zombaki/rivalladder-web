import { createAction, props } from '@ngrx/store';
import { UserProfile, UpdateUserDto } from '@models/user.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ clubId: string }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: UserProfile[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);

export const loadUserProfile = createAction(
  '[User] Load User Profile',
  props<{ userId: string }>()
);

export const loadUserProfileSuccess = createAction(
  '[User] Load User Profile Success',
  props<{ user: UserProfile }>()
);

export const loadUserProfileFailure = createAction(
  '[User] Load User Profile Failure',
  props<{ error: string }>()
);

export const updateUserProfile = createAction(
  '[User] Update User Profile',
  props<{ userId: string; updates: UpdateUserDto }>()
);

export const updateUserProfileSuccess = createAction(
  '[User] Update User Profile Success',
  props<{ user: UserProfile }>()
);

export const updateUserProfileFailure = createAction(
  '[User] Update User Profile Failure',
  props<{ error: string }>()
);

export const uploadUserPhoto = createAction(
  '[User] Upload Photo',
  props<{ userId: string; file: File }>()
);

export const uploadUserPhotoSuccess = createAction(
  '[User] Upload Photo Success',
  props<{ userId: string; photoUrl: string }>()
);

export const uploadUserPhotoFailure = createAction(
  '[User] Upload Photo Failure',
  props<{ error: string }>()
);

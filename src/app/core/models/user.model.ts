export enum UserRole {
  Member = 'member',
  Admin = 'admin',
  SuperAdmin = 'super-admin'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  clubId: string;
  role: UserRole;
  memberSince: Date;
  avatar?: string;
}

export interface AuthUser extends User {
  token: string;
}

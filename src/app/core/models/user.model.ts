export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  clubId: string;
  memberSince: Date;
  avatar?: string;
}

export interface AuthUser extends User {
  token: string;
}

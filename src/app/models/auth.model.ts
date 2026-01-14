export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  clubId: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    clubId: string;
  };
  tokens: AuthTokens;
}

export interface PasswordResetDto {
  email: string;
}

export interface PasswordChangeDto {
  currentPassword: string;
  newPassword: string;
}

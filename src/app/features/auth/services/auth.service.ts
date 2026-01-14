import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthResponse, LoginDto, RegisterDto, AuthTokens } from '@models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Mock data
  private mockUser = {
    id: '1',
    email: 'demo@rivalladder.com',
    firstName: 'Demo',
    lastName: 'User',
    role: 'USER',
    clubId: 'club-1'
  };

  private mockTokens: AuthTokens = {
    accessToken: 'mock-access-token-123',
    refreshToken: 'mock-refresh-token-456'
  };

  constructor() {}

  login(credentials: LoginDto): Observable<AuthResponse> {
    // Return mock response
    const response: AuthResponse = {
      user: this.mockUser,
      tokens: this.mockTokens
    };
    // Store tokens in localStorage
    localStorage.setItem('accessToken', this.mockTokens.accessToken);
    localStorage.setItem('refreshToken', this.mockTokens.refreshToken);
    return of(response);
  }

  register(data: RegisterDto): Observable<AuthResponse> {
    // Return mock response with user data from registration
    const response: AuthResponse = {
      user: {
        id: '2',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'USER',
        clubId: data.clubId
      },
      tokens: this.mockTokens
    };
    localStorage.setItem('accessToken', this.mockTokens.accessToken);
    localStorage.setItem('refreshToken', this.mockTokens.refreshToken);
    return of(response);
  }

  logout(): Observable<void> {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return of(undefined);
  }

  refreshToken(refreshToken: string): Observable<AuthTokens> {
    return of(this.mockTokens);
  }

  getCurrentUser(): Observable<any> {
    return of(this.mockUser);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }
}

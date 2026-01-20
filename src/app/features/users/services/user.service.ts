import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { User, UserProfile, UserRole, UpdateUserDto } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Mock data
  private mockUsers: UserProfile[] = [
    {
      id: '1',
      email: 'demo@rivalladder.com',
      firstName: 'Demo',
      lastName: 'User',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0101',
      bio: 'Passionate pickleball player',
      skillLevel: 'Intermediate',
      wins: 15,
      losses: 10,
      currentRank: 5,
      createdAt: new Date('2025-12-01'),
      updatedAt: new Date('2026-01-10')
    },
    {
      id: '2',
      email: 'john.smith@example.com',
      firstName: 'John',
      lastName: 'Smith',
      photoUrl: '',
      role: UserRole.ADMIN,
      clubId: 'club-1',
      phone: '555-0102',
      bio: 'Club administrator and top player',
      skillLevel: 'Advanced',
      wins: 25,
      losses: 5,
      currentRank: 1,
      createdAt: new Date('2025-11-15'),
      updatedAt: new Date('2026-01-12')
    },
    {
      id: '3',
      email: 'sarah.johnson@example.com',
      firstName: 'Sarah',
      lastName: 'Johnson',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0103',
      bio: 'Love the game!',
      skillLevel: 'Intermediate',
      wins: 14,
      losses: 11,
      currentRank: 6,
      createdAt: new Date('2025-11-20'),
      updatedAt: new Date('2026-01-09')
    },
    {
      id: '4',
      email: 'mike.davis@example.com',
      firstName: 'Mike',
      lastName: 'Davis',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0104',
      bio: 'Competitive player',
      skillLevel: 'Intermediate',
      wins: 12,
      losses: 13,
      currentRank: 7,
      createdAt: new Date('2025-11-25'),
      updatedAt: new Date('2026-01-08')
    },
    {
      id: '5',
      email: 'emily.wilson@example.com',
      firstName: 'Emily',
      lastName: 'Wilson',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0105',
      bio: 'Here to improve my game',
      skillLevel: 'Advanced',
      wins: 22,
      losses: 6,
      currentRank: 2,
      createdAt: new Date('2025-11-18'),
      updatedAt: new Date('2026-01-11')
    },
    {
      id: '6',
      email: 'david.brown@example.com',
      firstName: 'David',
      lastName: 'Brown',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0106',
      bio: 'Just getting started',
      skillLevel: 'Advanced',
      wins: 20,
      losses: 8,
      currentRank: 3,
      createdAt: new Date('2025-12-05'),
      updatedAt: new Date('2026-01-10')
    },
    {
      id: '7',
      email: 'lisa.anderson@example.com',
      firstName: 'Lisa',
      lastName: 'Anderson',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0107',
      bio: 'Tennis player turned pickleballer',
      skillLevel: 'Intermediate',
      wins: 18,
      losses: 9,
      currentRank: 4,
      createdAt: new Date('2025-12-10'),
      updatedAt: new Date('2026-01-09')
    },
    {
      id: '8',
      email: 'jessica.martinez@example.com',
      firstName: 'Jessica',
      lastName: 'Martinez',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0108',
      bio: 'Weekend warrior',
      skillLevel: 'Beginner',
      wins: 10,
      losses: 14,
      currentRank: 8,
      createdAt: new Date('2025-12-15'),
      updatedAt: new Date('2026-01-05')
    },
    {
      id: '9',
      email: 'chris.taylor@example.com',
      firstName: 'Chris',
      lastName: 'Taylor',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0109',
      bio: 'Learning and having fun',
      skillLevel: 'Beginner',
      wins: 8,
      losses: 15,
      currentRank: 9,
      createdAt: new Date('2025-12-20'),
      updatedAt: new Date('2026-01-04')
    },
    {
      id: '10',
      email: 'amanda.white@example.com',
      firstName: 'Amanda',
      lastName: 'White',
      photoUrl: '',
      role: UserRole.USER,
      clubId: 'club-1',
      phone: '555-0110',
      bio: 'New to the sport',
      skillLevel: 'Beginner',
      wins: 7,
      losses: 16,
      currentRank: 10,
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-03')
    }
  ];

  constructor() {}

  getUsers(clubId?: string): Observable<UserProfile[]> {
    let users = [...this.mockUsers];

    if (clubId) {
      users = users.filter(u => u.clubId === clubId);
    }

    return of(users).pipe(delay(40));
  }

  getUser(userId: string): Observable<UserProfile | undefined> {
    const user = this.mockUsers.find(u => u.id === userId);
    return of(user).pipe(delay(30));
  }

  getUserProfile(userId: string): Observable<UserProfile | undefined> {
    const profile = this.mockUsers.find(u => u.id === userId);
    return of(profile).pipe(delay(30));
  }

  updateUser(userId: string, data: UpdateUserDto): Observable<UserProfile> {
    const user = this.mockUsers.find(u => u.id === userId);

    if (!user) {
      throw new Error('User not found');
    }

    const updatedUser: UserProfile = {
      ...user,
      ...data,
      updatedAt: new Date()
    };

    const index = this.mockUsers.findIndex(u => u.id === userId);
    this.mockUsers[index] = updatedUser;

    return of(updatedUser).pipe(delay(40));
  }

  uploadPhoto(userId: string, file: File): Observable<string> {
    // Mock photo upload
    const photoUrl = `https://example.com/photos/${userId}-${Date.now()}.jpg`;
    
    const user = this.mockUsers.find(u => u.id === userId);
    if (user) {
      user.photoUrl = photoUrl;
      user.updatedAt = new Date();
    }

    return of(photoUrl).pipe(delay(80));
  }

  searchUsers(query: string, clubId?: string): Observable<User[]> {
    let users = [...this.mockUsers];

    if (clubId) {
      users = users.filter(u => u.clubId === clubId);
    }

    const lowerQuery = query.toLowerCase();
    const filtered = users.filter(
      u => 
        u.firstName.toLowerCase().includes(lowerQuery) ||
        u.lastName.toLowerCase().includes(lowerQuery) ||
        u.email.toLowerCase().includes(lowerQuery)
    );

    return of(filtered).pipe(delay(300));
  }

  getUsersByClub(clubId: string): Observable<User[]> {
    const users = this.mockUsers.filter(u => u.clubId === clubId);
    return of(users).pipe(delay(30));
  }

  getUserStats(userId: string): Observable<{ wins: number; losses: number; rank: number }> {
    const user = this.mockUsers.find(u => u.id === userId);

    if (!user) {
      throw new Error('User not found');
    }

    const stats = {
      wins: user.wins,
      losses: user.losses,
      rank: user.currentRank || 0
    };

    return of(stats).pipe(delay(20));
  }

  deleteUser(userId: string): Observable<void> {
    const index = this.mockUsers.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.mockUsers.splice(index, 1);
    }
    return of(undefined).pipe(delay(30));
  }
}

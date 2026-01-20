import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Club, ClubSettings, CreateClubDto, UpdateClubDto } from '@models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  // Mock data
  private mockClubs: Club[] = [
    {
      id: 'club-1',
      name: 'RivalLadder Pickleball Club',
      description: 'Premier pickleball club for competitive players',
      sport: 'Pickleball',
      logoUrl: '',
      adminId: '2',
      settings: {
        maxChallengeRankDifference: 3,
        challengeExpirationDays: 7,
        allowSelfReportScores: true,
        requireAdminApproval: false
      },
      createdAt: new Date('2025-11-01'),
      updatedAt: new Date('2026-01-10')
    },
    {
      id: 'club-2',
      name: 'Tennis Masters Club',
      description: 'Elite tennis club with ladder system',
      sport: 'Tennis',
      logoUrl: '',
      adminId: '11',
      settings: {
        maxChallengeRankDifference: 5,
        challengeExpirationDays: 14,
        allowSelfReportScores: false,
        requireAdminApproval: true
      },
      createdAt: new Date('2025-10-15'),
      updatedAt: new Date('2026-01-05')
    },
    {
      id: 'club-3',
      name: 'Badminton Champions',
      description: 'Competitive badminton club',
      sport: 'Badminton',
      logoUrl: '',
      adminId: '12',
      settings: {
        maxChallengeRankDifference: 4,
        challengeExpirationDays: 10,
        allowSelfReportScores: true,
        requireAdminApproval: false
      },
      createdAt: new Date('2025-11-20'),
      updatedAt: new Date('2026-01-08')
    }
  ];

  constructor() {}

  getClubs(): Observable<Club[]> {
    return of([...this.mockClubs]).pipe(delay(400));
  }

  getClub(clubId: string): Observable<Club | undefined> {
    const club = this.mockClubs.find(c => c.id === clubId);
    return of(club).pipe(delay(300));
  }

  createClub(data: CreateClubDto): Observable<Club> {
    const defaultSettings: ClubSettings = {
      maxChallengeRankDifference: 3,
      challengeExpirationDays: 7,
      allowSelfReportScores: true,
      requireAdminApproval: false,
      ...data.settings
    };

    const newClub: Club = {
      id: `club-${Date.now()}`,
      name: data.name,
      description: data.description,
      sport: data.sport,
      logoUrl: '',
      adminId: '1', // Current user
      settings: defaultSettings,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.mockClubs.push(newClub);
    return of(newClub).pipe(delay(40));
  }

  updateClub(clubId: string, data: UpdateClubDto): Observable<Club> {
    const club = this.mockClubs.find(c => c.id === clubId);

    if (!club) {
      throw new Error('Club not found');
    }

    const updatedClub: Club = {
      ...club,
      name: data.name || club.name,
      description: data.description || club.description,
      logoUrl: data.logoUrl || club.logoUrl,
      settings: data.settings ? { ...club.settings, ...data.settings } : club.settings,
      updatedAt: new Date()
    };

    const index = this.mockClubs.findIndex(c => c.id === clubId);
    this.mockClubs[index] = updatedClub;

    return of(updatedClub).pipe(delay(40));
  }

  deleteClub(clubId: string): Observable<void> {
    const index = this.mockClubs.findIndex(c => c.id === clubId);
    if (index !== -1) {
      this.mockClubs.splice(index, 1);
    }
    return of(undefined).pipe(delay(30));
  }

  getClubSettings(clubId: string): Observable<ClubSettings | undefined> {
    const club = this.mockClubs.find(c => c.id === clubId);
    return of(club?.settings).pipe(delay(20));
  }

  updateClubSettings(clubId: string, settings: Partial<ClubSettings>): Observable<ClubSettings> {
    const club = this.mockClubs.find(c => c.id === clubId);

    if (!club) {
      throw new Error('Club not found');
    }

    club.settings = {
      ...club.settings,
      ...settings
    };
    club.updatedAt = new Date();

    return of(club.settings).pipe(delay(40));
  }

  uploadClubLogo(clubId: string, file: File): Observable<string> {
    // Mock logo upload
    const logoUrl = `https://example.com/logos/${clubId}-${Date.now()}.jpg`;
    
    const club = this.mockClubs.find(c => c.id === clubId);
    if (club) {
      club.logoUrl = logoUrl;
      club.updatedAt = new Date();
    }

    return of(logoUrl).pipe(delay(80));
  }

  getClubsBySport(sport: string): Observable<Club[]> {
    const clubs = this.mockClubs.filter(
      c => c.sport.toLowerCase() === sport.toLowerCase()
    );
    return of(clubs).pipe(delay(30));
  }

  searchClubs(query: string): Observable<Club[]> {
    const lowerQuery = query.toLowerCase();
    const filtered = this.mockClubs.filter(
      c => 
        c.name.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery) ||
        c.sport.toLowerCase().includes(lowerQuery)
    );

    return of(filtered).pipe(delay(30));
  }

  isUserAdmin(clubId: string, userId: string): Observable<boolean> {
    const club = this.mockClubs.find(c => c.id === clubId);
    const isAdmin = club?.adminId === userId;
    return of(isAdmin).pipe(delay(10));
  }
}

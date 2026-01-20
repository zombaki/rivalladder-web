import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Challenge, ChallengeStatus, CreateChallengeDto, RespondToChallengeDto, ChallengeValidation } from '@models/challenge.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  // Mock data
  private mockChallenges: Challenge[] = [
    {
      id: 'challenge-1',
      challengerId: '1',
      challengedId: '2',
      clubId: 'club-1',
      status: ChallengeStatus.PENDING,
      createdAt: new Date('2026-01-10'),
      updatedAt: new Date('2026-01-10'),
      expiresAt: new Date('2026-01-17'),
      challenger: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: '',
        rank: 5
      },
      challenged: {
        id: '2',
        firstName: 'John',
        lastName: 'Smith',
        photoUrl: '',
        rank: 3
      }
    },
    {
      id: 'challenge-2',
      challengerId: '3',
      challengedId: '1',
      clubId: 'club-1',
      status: ChallengeStatus.ACCEPTED,
      matchId: 'match-1',
      createdAt: new Date('2026-01-08'),
      updatedAt: new Date('2026-01-09'),
      expiresAt: new Date('2026-01-15'),
      challenger: {
        id: '3',
        firstName: 'Sarah',
        lastName: 'Johnson',
        photoUrl: '',
        rank: 6
      },
      challenged: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: '',
        rank: 5
      }
    },
    {
      id: 'challenge-3',
      challengerId: '1',
      challengedId: '4',
      clubId: 'club-1',
      status: ChallengeStatus.COMPLETED,
      matchId: 'match-2',
      createdAt: new Date('2026-01-05'),
      updatedAt: new Date('2026-01-06'),
      expiresAt: new Date('2026-01-12'),
      challenger: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: '',
        rank: 5
      },
      challenged: {
        id: '4',
        firstName: 'Mike',
        lastName: 'Davis',
        photoUrl: '',
        rank: 7
      }
    }
  ];

  constructor() {}

  getChallenges(userId?: string): Observable<Challenge[]> {
    let challenges = [...this.mockChallenges];
    
    if (userId) {
      challenges = challenges.filter(
        c => c.challengerId === userId || c.challengedId === userId
      );
    }
    
    return of(challenges).pipe(delay(30));
  }

  getChallenge(id: string): Observable<Challenge | undefined> {
    const challenge = this.mockChallenges.find(c => c.id === id);
    return of(challenge).pipe(delay(20));
  }

  createChallenge(data: CreateChallengeDto): Observable<Challenge> {
    const newChallenge: Challenge = {
      id: `challenge-${Date.now()}`,
      challengerId: '1', // Current user
      challengedId: data.challengedId,
      clubId: 'club-1',
      status: ChallengeStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      challenger: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: '',
        rank: 5
      },
      challenged: {
        id: data.challengedId,
        firstName: 'Player',
        lastName: 'Name',
        photoUrl: '',
        rank: 4
      }
    };

    this.mockChallenges.push(newChallenge);
    return of(newChallenge).pipe(delay(40));
  }

  respondToChallenge(challengeId: string, data: RespondToChallengeDto): Observable<Challenge> {
    const challenge = this.mockChallenges.find(c => c.id === challengeId);
    
    if (!challenge) {
      throw new Error('Challenge not found');
    }

    challenge.status = data.accept ? ChallengeStatus.ACCEPTED : ChallengeStatus.DECLINED;
    challenge.updatedAt = new Date();

    if (data.accept) {
      // Create a match when challenge is accepted
      challenge.matchId = `match-${Date.now()}`;
    }

    return of(challenge).pipe(delay(40));
  }

  validateChallenge(challengerId: string, challengedId: string): Observable<ChallengeValidation> {
    // Mock validation logic
    const validation: ChallengeValidation = {
      isValid: true,
      rankDifference: 2
    };

    // Example: Check if rank difference is within allowed range
    if (Math.abs(validation.rankDifference || 0) > 3) {
      validation.isValid = false;
      validation.reason = 'Rank difference is too large';
    }

    return of(validation).pipe(delay(20));
  }

  getPendingChallenges(userId: string): Observable<Challenge[]> {
    const pending = this.mockChallenges.filter(
      c => c.challengedId === userId && c.status === ChallengeStatus.PENDING
    );
    return of(pending).pipe(delay(30));
  }

  deleteChallengeChallenge(challengeId: string): Observable<void> {
    const index = this.mockChallenges.findIndex(c => c.id === challengeId);
    if (index !== -1) {
      this.mockChallenges.splice(index, 1);
    }
    return of(undefined).pipe(delay(300));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Match, MatchStatus, UpdateMatchScoreDto, MatchHistory } from '@models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // Mock data
  private mockMatches: Match[] = [
    {
      id: 'match-1',
      challengeId: 'challenge-2',
      clubId: 'club-1',
      player1Id: '3',
      player2Id: '1',
      player1Score: 11,
      player2Score: 9,
      winnerId: '3',
      status: MatchStatus.COMPLETED,
      scheduledDate: new Date('2026-01-10'),
      completedDate: new Date('2026-01-10'),
      notes: 'Great match!',
      player1: {
        id: '3',
        firstName: 'Sarah',
        lastName: 'Johnson',
        photoUrl: ''
      },
      player2: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: ''
      },
      createdAt: new Date('2026-01-09'),
      updatedAt: new Date('2026-01-10')
    },
    {
      id: 'match-2',
      challengeId: 'challenge-3',
      clubId: 'club-1',
      player1Id: '1',
      player2Id: '4',
      player1Score: 11,
      player2Score: 7,
      winnerId: '1',
      status: MatchStatus.COMPLETED,
      scheduledDate: new Date('2026-01-06'),
      completedDate: new Date('2026-01-06'),
      notes: 'Close game',
      player1: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: ''
      },
      player2: {
        id: '4',
        firstName: 'Mike',
        lastName: 'Davis',
        photoUrl: ''
      },
      createdAt: new Date('2026-01-05'),
      updatedAt: new Date('2026-01-06')
    },
    {
      id: 'match-3',
      clubId: 'club-1',
      player1Id: '1',
      player2Id: '2',
      status: MatchStatus.SCHEDULED,
      scheduledDate: new Date('2026-01-15'),
      player1: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: ''
      },
      player2: {
        id: '2',
        firstName: 'John',
        lastName: 'Smith',
        photoUrl: ''
      },
      createdAt: new Date('2026-01-12'),
      updatedAt: new Date('2026-01-12')
    },
    {
      id: 'match-4',
      clubId: 'club-1',
      player1Id: '5',
      player2Id: '6',
      player1Score: 11,
      player2Score: 8,
      winnerId: '5',
      status: MatchStatus.COMPLETED,
      scheduledDate: new Date('2026-01-11'),
      completedDate: new Date('2026-01-11'),
      player1: {
        id: '5',
        firstName: 'Emily',
        lastName: 'Wilson',
        photoUrl: ''
      },
      player2: {
        id: '6',
        firstName: 'David',
        lastName: 'Brown',
        photoUrl: ''
      },
      createdAt: new Date('2026-01-10'),
      updatedAt: new Date('2026-01-11')
    },
    {
      id: 'match-5',
      clubId: 'club-1',
      player1Id: '2',
      player2Id: '7',
      player1Score: 11,
      player2Score: 5,
      winnerId: '2',
      status: MatchStatus.COMPLETED,
      scheduledDate: new Date('2026-01-12'),
      completedDate: new Date('2026-01-12'),
      player1: {
        id: '2',
        firstName: 'John',
        lastName: 'Smith',
        photoUrl: ''
      },
      player2: {
        id: '7',
        firstName: 'Lisa',
        lastName: 'Anderson',
        photoUrl: ''
      },
      createdAt: new Date('2026-01-11'),
      updatedAt: new Date('2026-01-12')
    }
  ];

  constructor() {}

  getMatches(userId?: string, clubId?: string): Observable<Match[]> {
    let matches = [...this.mockMatches];

    if (clubId) {
      matches = matches.filter(m => m.clubId === clubId);
    }

    if (userId) {
      matches = matches.filter(
        m => m.player1Id === userId || m.player2Id === userId
      );
    }

    return of(matches).pipe(delay(40));
  }

  getMatch(matchId: string): Observable<Match | undefined> {
    const match = this.mockMatches.find(m => m.id === matchId);
    return of(match).pipe(delay(30));
  }

  createMatch(challengeId: string, player1Id: string, player2Id: string): Observable<Match> {
    const newMatch: Match = {
      id: `match-${Date.now()}`,
      challengeId,
      clubId: 'club-1',
      player1Id,
      player2Id,
      status: MatchStatus.SCHEDULED,
      scheduledDate: new Date(),
      player1: {
        id: player1Id,
        firstName: 'Player',
        lastName: 'One',
        photoUrl: ''
      },
      player2: {
        id: player2Id,
        firstName: 'Player',
        lastName: 'Two',
        photoUrl: ''
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.mockMatches.push(newMatch);
    return of(newMatch).pipe(delay(40));
  }

  updateMatchScore(matchId: string, score: UpdateMatchScoreDto): Observable<Match> {
    const match = this.mockMatches.find(m => m.id === matchId);

    if (!match) {
      throw new Error('Match not found');
    }

    match.player1Score = score.player1Score;
    match.player2Score = score.player2Score;
    match.winnerId = score.player1Score > score.player2Score ? match.player1Id : match.player2Id;
    match.status = MatchStatus.COMPLETED;
    match.completedDate = new Date();
    match.notes = score.notes;
    match.updatedAt = new Date();

    return of(match).pipe(delay(40));
  }

  getUserMatches(userId: string): Observable<Match[]> {
    const userMatches = this.mockMatches.filter(
      m => m.player1Id === userId || m.player2Id === userId
    );
    return of(userMatches).pipe(delay(30));
  }

  getMatchHistory(userId: string): Observable<MatchHistory> {
    const userMatches = this.mockMatches.filter(
      m => (m.player1Id === userId || m.player2Id === userId) && 
           m.status === MatchStatus.COMPLETED
    );

    const totalWins = userMatches.filter(m => m.winnerId === userId).length;
    const totalLosses = userMatches.filter(
      m => m.winnerId && m.winnerId !== userId
    ).length;

    const history: MatchHistory = {
      matches: userMatches,
      totalWins,
      totalLosses,
      winPercentage: totalWins + totalLosses > 0 
        ? (totalWins / (totalWins + totalLosses)) * 100 
        : 0
    };

    return of(history).pipe(delay(40));
  }

  getRecentMatches(clubId: string, limit: number = 10): Observable<Match[]> {
    const recentMatches = this.mockMatches
      .filter(m => m.clubId === clubId && m.status === MatchStatus.COMPLETED)
      .sort((a, b) => {
        const dateA = a.completedDate?.getTime() || 0;
        const dateB = b.completedDate?.getTime() || 0;
        return dateB - dateA;
      })
      .slice(0, limit);

    return of(recentMatches).pipe(delay(30));
  }

  getUpcomingMatches(userId: string): Observable<Match[]> {
    const upcoming = this.mockMatches.filter(
      m => (m.player1Id === userId || m.player2Id === userId) &&
           m.status === MatchStatus.SCHEDULED
    );
    return of(upcoming).pipe(delay(30));
  }

  cancelMatch(matchId: string): Observable<void> {
    const match = this.mockMatches.find(m => m.id === matchId);
    if (match) {
      match.status = MatchStatus.CANCELLED;
      match.updatedAt = new Date();
    }
    return of(undefined).pipe(delay(30));
  }

  deleteMatch(matchId: string): Observable<void> {
    const index = this.mockMatches.findIndex(m => m.id === matchId);
    if (index !== -1) {
      this.mockMatches.splice(index, 1);
    }
    return of(undefined).pipe(delay(30));
  }
}

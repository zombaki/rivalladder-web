import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { LadderEntry, LadderHistory, RankingChange } from '@models/ladder.model';

@Injectable({
  providedIn: 'root'
})
export class LadderService {
  // Mock data
  private mockLadderEntries: LadderEntry[] = [
    {
      id: 'entry-1',
      userId: '2',
      clubId: 'club-1',
      rank: 1,
      points: 1500,
      wins: 25,
      losses: 5,
      winStreak: 5,
      lastMatchDate: new Date('2026-01-12'),
      user: {
        id: '2',
        firstName: 'John',
        lastName: 'Smith',
        photoUrl: ''
      }
    },
    {
      id: 'entry-2',
      userId: '5',
      clubId: 'club-1',
      rank: 2,
      points: 1450,
      wins: 22,
      losses: 6,
      winStreak: 3,
      lastMatchDate: new Date('2026-01-11'),
      user: {
        id: '5',
        firstName: 'Emily',
        lastName: 'Wilson',
        photoUrl: ''
      }
    },
    {
      id: 'entry-3',
      userId: '6',
      clubId: 'club-1',
      rank: 3,
      points: 1400,
      wins: 20,
      losses: 8,
      winStreak: 2,
      lastMatchDate: new Date('2026-01-10'),
      user: {
        id: '6',
        firstName: 'David',
        lastName: 'Brown',
        photoUrl: ''
      }
    },
    {
      id: 'entry-4',
      userId: '7',
      clubId: 'club-1',
      rank: 4,
      points: 1350,
      wins: 18,
      losses: 9,
      winStreak: 1,
      lastMatchDate: new Date('2026-01-09'),
      user: {
        id: '7',
        firstName: 'Lisa',
        lastName: 'Anderson',
        photoUrl: ''
      }
    },
    {
      id: 'entry-5',
      userId: '1',
      clubId: 'club-1',
      rank: 5,
      points: 1300,
      wins: 15,
      losses: 10,
      winStreak: 0,
      lastMatchDate: new Date('2026-01-08'),
      user: {
        id: '1',
        firstName: 'Demo',
        lastName: 'User',
        photoUrl: ''
      }
    },
    {
      id: 'entry-6',
      userId: '3',
      clubId: 'club-1',
      rank: 6,
      points: 1250,
      wins: 14,
      losses: 11,
      winStreak: 0,
      lastMatchDate: new Date('2026-01-07'),
      user: {
        id: '3',
        firstName: 'Sarah',
        lastName: 'Johnson',
        photoUrl: ''
      }
    },
    {
      id: 'entry-7',
      userId: '4',
      clubId: 'club-1',
      rank: 7,
      points: 1200,
      wins: 12,
      losses: 13,
      winStreak: 0,
      lastMatchDate: new Date('2026-01-06'),
      user: {
        id: '4',
        firstName: 'Mike',
        lastName: 'Davis',
        photoUrl: ''
      }
    },
    {
      id: 'entry-8',
      userId: '8',
      clubId: 'club-1',
      rank: 8,
      points: 1150,
      wins: 10,
      losses: 14,
      winStreak: 0,
      lastMatchDate: new Date('2026-01-05'),
      user: {
        id: '8',
        firstName: 'Jessica',
        lastName: 'Martinez',
        photoUrl: ''
      }
    },
    {
      id: 'entry-9',
      userId: '9',
      clubId: 'club-1',
      rank: 9,
      points: 1100,
      wins: 8,
      losses: 15,
      winStreak: 0,
      lastMatchDate: new Date('2026-01-04'),
      user: {
        id: '9',
        firstName: 'Chris',
        lastName: 'Taylor',
        photoUrl: ''
      }
    },
    {
      id: 'entry-10',
      userId: '10',
      clubId: 'club-1',
      rank: 10,
      points: 1050,
      wins: 7,
      losses: 16,
      winStreak: 0,
      lastMatchDate: new Date('2026-01-03'),
      user: {
        id: '10',
        firstName: 'Amanda',
        lastName: 'White',
        photoUrl: ''
      }
    }
  ];

  constructor() {}

  getLadder(clubId: string): Observable<LadderEntry[]> {
    const entries = this.mockLadderEntries
      .filter(e => e.clubId === clubId)
      .sort((a, b) => a.rank - b.rank);
    
    return of(entries).pipe(delay(40));
  }

  getUserLadderEntry(userId: string, clubId: string): Observable<LadderEntry | undefined> {
    const entry = this.mockLadderEntries.find(
      e => e.userId === userId && e.clubId === clubId
    );
    return of(entry).pipe(delay(300));
  }

  updateRankings(clubId: string): Observable<LadderEntry[]> {
    // Mock updating rankings after match results
    const entries = this.mockLadderEntries
      .filter(e => e.clubId === clubId)
      .sort((a, b) => b.points - a.points)
      .map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));

    this.mockLadderEntries = [
      ...this.mockLadderEntries.filter(e => e.clubId !== clubId),
      ...entries
    ];

    return of(entries).pipe(delay(50));
  }

  getLadderHistory(ladderEntryId: string): Observable<LadderHistory[]> {
    // Mock ladder history
    const mockHistory: LadderHistory[] = [
      {
        id: 'history-1',
        ladderEntryId,
        rank: 5,
        points: 1300,
        date: new Date('2026-01-08'),
        reason: 'Won match against Mike Davis'
      },
      {
        id: 'history-2',
        ladderEntryId,
        rank: 6,
        points: 1250,
        date: new Date('2026-01-01'),
        reason: 'Lost match against Sarah Johnson'
      },
      {
        id: 'history-3',
        ladderEntryId,
        rank: 5,
        points: 1280,
        date: new Date('2025-12-28'),
        reason: 'Won match against Chris Taylor'
      }
    ];

    return of(mockHistory).pipe(delay(30));
  }

  getRankingChanges(clubId: string): Observable<RankingChange[]> {
    // Mock recent ranking changes
    const mockChanges: RankingChange[] = [
      {
        userId: '2',
        oldRank: 2,
        newRank: 1,
        pointsChange: 50
      },
      {
        userId: '5',
        oldRank: 1,
        newRank: 2,
        pointsChange: -50
      }
    ];

    return of(mockChanges).pipe(delay(30));
  }

  getTop10(clubId: string): Observable<LadderEntry[]> {
    const top10 = this.mockLadderEntries
      .filter(e => e.clubId === clubId)
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);
    
    return of(top10).pipe(delay(30));
  }
}

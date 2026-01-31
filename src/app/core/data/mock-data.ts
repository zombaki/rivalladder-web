import { AuthUser, Player, Challenge, Match, Club, ChallengeStatus } from '../models';

export class MockData {
  static readonly CLUB: Club = {
    id: 'club-1',
    name: 'Elite Tennis Club',
    description: 'Premier tennis club with competitive ladder system',
    location: 'New York, NY',
    memberCount: 50,
    founded: new Date('2020-01-01'),
    logo: 'assets/club-logo.png'
  };

  static readonly USERS: AuthUser[] = [
    {
      id: 'user-1',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      clubId: 'club-1',
      memberSince: new Date('2023-01-15'),
      token: 'mock-token-john-doe',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 'user-2',
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      clubId: 'club-1',
      memberSince: new Date('2023-02-20'),
      token: 'mock-token-jane-smith',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 'user-3',
      email: 'mike.johnson@example.com',
      firstName: 'Mike',
      lastName: 'Johnson',
      clubId: 'club-1',
      memberSince: new Date('2023-03-10'),
      token: 'mock-token-mike-johnson',
      avatar: 'https://i.pravatar.cc/150?img=33'
    }
  ];

  static readonly PLAYERS: Player[] = [
    {
      id: 'player-1',
      userId: 'user-1',
      clubId: 'club-1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      currentRank: 5,
      previousRank: 7,
      points: 1850,
      wins: 24,
      losses: 12,
      winStreak: 3,
      isActive: true,
      joinedDate: new Date('2023-01-15'),
      lastMatchDate: new Date('2026-01-25'),
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 'player-2',
      userId: 'user-2',
      clubId: 'club-1',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      currentRank: 2,
      previousRank: 3,
      points: 2450,
      wins: 35,
      losses: 8,
      winStreak: 5,
      isActive: true,
      joinedDate: new Date('2023-02-20'),
      lastMatchDate: new Date('2026-01-28'),
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 'player-3',
      userId: 'user-3',
      clubId: 'club-1',
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@example.com',
      currentRank: 1,
      previousRank: 1,
      points: 2800,
      wins: 42,
      losses: 5,
      winStreak: 8,
      isActive: true,
      joinedDate: new Date('2023-03-10'),
      lastMatchDate: new Date('2026-01-29'),
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    {
      id: 'player-4',
      userId: 'user-4',
      clubId: 'club-1',
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah.williams@example.com',
      currentRank: 3,
      previousRank: 2,
      points: 2300,
      wins: 30,
      losses: 10,
      winStreak: 2,
      isActive: true,
      joinedDate: new Date('2023-04-05'),
      lastMatchDate: new Date('2026-01-27'),
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
      id: 'player-5',
      userId: 'user-5',
      clubId: 'club-1',
      firstName: 'Tom',
      lastName: 'Brown',
      email: 'tom.brown@example.com',
      currentRank: 4,
      previousRank: 5,
      points: 2100,
      wins: 28,
      losses: 14,
      winStreak: 1,
      isActive: true,
      joinedDate: new Date('2023-05-12'),
      lastMatchDate: new Date('2026-01-26'),
      avatar: 'https://i.pravatar.cc/150?img=15'
    },
    {
      id: 'player-6',
      userId: 'user-6',
      clubId: 'club-1',
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily.davis@example.com',
      currentRank: 6,
      previousRank: 6,
      points: 1750,
      wins: 22,
      losses: 15,
      winStreak: 0,
      isActive: true,
      joinedDate: new Date('2023-06-18'),
      lastMatchDate: new Date('2026-01-24'),
      avatar: 'https://i.pravatar.cc/150?img=16'
    },
    {
      id: 'player-7',
      userId: 'user-7',
      clubId: 'club-1',
      firstName: 'David',
      lastName: 'Martinez',
      email: 'david.martinez@example.com',
      currentRank: 7,
      previousRank: 8,
      points: 1650,
      wins: 20,
      losses: 18,
      winStreak: 2,
      isActive: true,
      joinedDate: new Date('2023-07-22'),
      lastMatchDate: new Date('2026-01-23'),
      avatar: 'https://i.pravatar.cc/150?img=52'
    },
    {
      id: 'player-8',
      userId: 'user-8',
      clubId: 'club-1',
      firstName: 'Lisa',
      lastName: 'Anderson',
      email: 'lisa.anderson@example.com',
      currentRank: 8,
      previousRank: 9,
      points: 1550,
      wins: 18,
      losses: 20,
      winStreak: 0,
      isActive: true,
      joinedDate: new Date('2023-08-30'),
      lastMatchDate: new Date('2026-01-22'),
      avatar: 'https://i.pravatar.cc/150?img=29'
    }
  ];

  static readonly CHALLENGES: Challenge[] = [
    {
      id: 'challenge-1',
      challengerId: 'player-1',
      challengerName: 'John Doe',
      challengerRank: 5,
      opponentId: 'player-4',
      opponentName: 'Sarah Williams',
      opponentRank: 3,
      status: ChallengeStatus.Pending,
      createdDate: new Date('2026-01-28'),
      scheduledDate: new Date('2026-02-05')
    },
    {
      id: 'challenge-2',
      challengerId: 'player-6',
      challengerName: 'Emily Davis',
      challengerRank: 6,
      opponentId: 'player-1',
      opponentName: 'John Doe',
      opponentRank: 5,
      status: ChallengeStatus.Accepted,
      createdDate: new Date('2026-01-27'),
      acceptedDate: new Date('2026-01-28'),
      scheduledDate: new Date('2026-02-03')
    },
    {
      id: 'challenge-3',
      challengerId: 'player-2',
      challengerName: 'Jane Smith',
      challengerRank: 2,
      opponentId: 'player-3',
      opponentName: 'Mike Johnson',
      opponentRank: 1,
      status: ChallengeStatus.Completed,
      createdDate: new Date('2026-01-20'),
      acceptedDate: new Date('2026-01-21'),
      completedDate: new Date('2026-01-28'),
      scheduledDate: new Date('2026-01-28'),
      winnerId: 'player-3',
      challengerScore: 4,
      opponentScore: 6
    }
  ];

  static readonly MATCHES: Match[] = [
    {
      id: 'match-1',
      challengeId: 'challenge-3',
      player1Id: 'player-2',
      player1Name: 'Jane Smith',
      player1Score: 4,
      player2Id: 'player-3',
      player2Name: 'Mike Johnson',
      player2Score: 6,
      winnerId: 'player-3',
      playedDate: new Date('2026-01-28'),
      pointsAwarded: 150,
      rankChangePlayer1: 0,
      rankChangePlayer2: 0
    },
    {
      id: 'match-2',
      challengeId: 'prev-challenge-1',
      player1Id: 'player-1',
      player1Name: 'John Doe',
      player1Score: 6,
      player2Id: 'player-7',
      player2Name: 'David Martinez',
      player2Score: 3,
      winnerId: 'player-1',
      playedDate: new Date('2026-01-25'),
      pointsAwarded: 100,
      rankChangePlayer1: 2,
      rankChangePlayer2: -1
    },
    {
      id: 'match-3',
      challengeId: 'prev-challenge-2',
      player1Id: 'player-5',
      player1Name: 'Tom Brown',
      player1Score: 7,
      player2Id: 'player-4',
      player2Name: 'Sarah Williams',
      player2Score: 5,
      winnerId: 'player-5',
      playedDate: new Date('2026-01-26'),
      pointsAwarded: 120,
      rankChangePlayer1: 1,
      rankChangePlayer2: -1
    }
  ];
}

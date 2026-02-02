export interface Player {
  id: string;
  userId: string;
  clubId: string;
  firstName: string;
  lastName: string;
  email: string;
  currentRank: number;
  previousRank: number;
  wins: number;
  losses: number;
  winStreak: number;
  avatar?: string;
  isActive: boolean;
  joinedDate: Date;
  lastMatchDate?: Date;
}

export interface PlayerStats {
  playerId: string;
  totalMatches: number;
  wins: number;
  losses: number;
  winRate: number;
  averagePointsPerMatch: number;
  highestRank: number;
  currentRank: number;
}

export interface LadderEntry {
  id: string;
  userId: string;
  clubId: string;
  rank: number;
  points: number;
  wins: number;
  losses: number;
  winStreak: number;
  lastMatchDate?: Date;
  user?: {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
  };
}

export interface LadderHistory {
  id: string;
  ladderEntryId: string;
  rank: number;
  points: number;
  date: Date;
  reason: string;
}

export interface RankingChange {
  userId: string;
  oldRank: number;
  newRank: number;
  pointsChange: number;
}

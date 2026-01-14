export enum MatchStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  DISPUTED = 'DISPUTED',
  CANCELLED = 'CANCELLED'
}

export interface Match {
  id: string;
  challengeId?: string;
  clubId: string;
  player1Id: string;
  player2Id: string;
  player1Score?: number;
  player2Score?: number;
  winnerId?: string;
  status: MatchStatus;
  scheduledDate?: Date;
  completedDate?: Date;
  notes?: string;
  player1?: {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
  };
  player2?: {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchScore {
  player1Score: number;
  player2Score: number;
  winnerId: string;
}

export interface UpdateMatchScoreDto {
  player1Score: number;
  player2Score: number;
  notes?: string;
}

export interface MatchHistory {
  matches: Match[];
  totalWins: number;
  totalLosses: number;
  winPercentage: number;
}

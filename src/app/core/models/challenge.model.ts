export enum ChallengeStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Declined = 'declined',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export interface Challenge {
  id: string;
  challengerId: string;
  challengerName: string;
  challengerRank: number;
  opponentId: string;
  opponentName: string;
  opponentRank: number;
  status: ChallengeStatus;
  createdDate: Date;
  acceptedDate?: Date;
  completedDate?: Date;
  scheduledDate?: Date;
  winnerId?: string;
  challengerScore?: number;
  opponentScore?: number;
  notes?: string;
}

export interface CreateChallengeDto {
  challengerId: string;
  opponentId: string;
  scheduledDate?: Date;
  notes?: string;
}

export interface UpdateChallengeDto {
  status?: ChallengeStatus;
  winnerId?: string;
  challengerScore?: number;
  opponentScore?: number;
  scheduledDate?: Date;
  acceptedDate?: Date;
}

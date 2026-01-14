export enum ChallengeStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  EXPIRED = 'EXPIRED',
  COMPLETED = 'COMPLETED'
}

export interface Challenge {
  id: string;
  challengerId: string;
  challengedId: string;
  clubId: string;
  status: ChallengeStatus;
  matchId?: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  challenger?: {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
    rank: number;
  };
  challenged?: {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
    rank: number;
  };
}

export interface CreateChallengeDto {
  challengedId: string;
}

export interface RespondToChallengeDto {
  accept: boolean;
}

export interface ChallengeValidation {
  isValid: boolean;
  reason?: string;
  rankDifference?: number;
}

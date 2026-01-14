export interface Club {
  id: string;
  name: string;
  description: string;
  sport: string;
  logoUrl?: string;
  adminId: string;
  settings: ClubSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClubSettings {
  maxChallengeRankDifference: number;
  challengeExpirationDays: number;
  allowSelfReportScores: boolean;
  requireAdminApproval: boolean;
}

export interface CreateClubDto {
  name: string;
  description: string;
  sport: string;
  settings?: Partial<ClubSettings>;
}

export interface UpdateClubDto {
  name?: string;
  description?: string;
  logoUrl?: string;
  settings?: Partial<ClubSettings>;
}

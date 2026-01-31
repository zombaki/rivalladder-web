export interface Match {
  id: string;
  challengeId: string;
  player1Id: string;
  player1Name: string;
  player1Score: number;
  player2Id: string;
  player2Name: string;
  player2Score: number;
  winnerId: string;
  playedDate: Date;
  pointsAwarded: number;
  rankChangePlayer1: number;
  rankChangePlayer2: number;
}

export interface MatchHistory {
  matches: Match[];
  totalMatches: number;
}

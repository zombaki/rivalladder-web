export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'RivalLadder',
  defaultSport: 'pickleball',
  maxChallengeRankDifference: 3, // Users can only challenge within 3 ranks
  photoUploadMaxSize: 5242880, // 5MB in bytes
  photoUploadAllowedTypes: ['image/jpeg', 'image/png', 'image/webp']
};

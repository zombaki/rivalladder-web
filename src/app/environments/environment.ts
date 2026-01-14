// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'RivalLadder',
  defaultSport: 'pickleball',
  maxChallengeRankDifference: 3,
  photoUploadMaxSize: 5242880,
  photoUploadAllowedTypes: ['image/jpeg', 'image/png', 'image/webp']
};

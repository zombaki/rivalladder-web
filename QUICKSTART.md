# RivalLadder - Quick Start Guide

## Installation

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 17+ (install globally: `npm install -g @angular/cli`)

### Install Dependencies
```bash
npm install
```

## Development

### Start Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`

### Project Structure
```
src/app/
├── core/                    # Core services, guards, interceptors
│   ├── guards/             # Auth and admin guards
│   ├── interceptors/       # HTTP interceptors
│   └── services/           # Shared services
├── features/               # Feature modules
│   ├── auth/              # Authentication (login, register)
│   ├── ladder/            # Ladder rankings
│   ├── challenges/        # Challenge system
│   ├── matches/           # Match scores
│   ├── users/             # User profiles
│   └── clubs/             # Club management
├── shared/                # Shared components
│   └── components/
│       ├── navbar/
│       └── loading-spinner/
├── store/                 # NgRx root state
└── models/                # TypeScript interfaces
```

## Key Features Implemented

### Authentication
- Login/Register with form validation
- JWT token management
- Auto token refresh
- Route guards

### Ladder System
- Ranked player list
- Win/loss statistics
- Win streak tracking
- Challenge buttons

### Challenges
- Create challenges
- Accept/Decline challenges
- Challenge validation (rank-based)
- Status tracking

### Matches
- Score entry
- Match history
- Winner tracking
- Status management

### User Profile
- Profile editing
- Photo upload
- Personal statistics

## Configuration

### Environment Settings
Edit `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',  // Your backend API
  maxChallengeRankDifference: 3,        // Challenge constraints
  // ... other settings
};
```

## Building for Production

```bash
npm run build:prod
```
Output will be in `dist/rivalladder-web/`

## Next Steps

### 1. Set Up Backend API
Create endpoints matching the expected API structure (see ARCHITECTURE.md)

### 2. Connect to Real Data
- Update API URLs in environment files
- Test authentication flow
- Verify data models match backend

### 3. Add Missing Features
- Photo upload implementation
- Match scheduling
- Admin dashboard
- Club settings page
- Statistics/analytics

### 4. Testing
```bash
npm test      # Run unit tests
npm run lint  # Check code quality
```

## Common Tasks

### Create New Component
```bash
ng generate component features/your-feature/components/your-component --standalone
```

### Create New Service
```bash
ng generate service features/your-feature/services/your-service
```

### Add NgRx Feature
```bash
ng generate @ngrx/schematics:feature features/your-feature/store/YourFeature --module features/your-feature
```

## Troubleshooting

### Port Already in Use
```bash
ng serve --port 4201
```

### Clear Angular Cache
```bash
rm -rf .angular/cache
```

### Module Not Found
```bash
npm install
```

## Resources

- [Angular Docs](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [NgRx](https://ngrx.io/)
- [RxJS](https://rxjs.dev/)

## Support

For questions or issues, refer to:
- README.md - Project overview
- ARCHITECTURE.md - Technical details
- Code comments in source files

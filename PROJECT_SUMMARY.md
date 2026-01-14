# RivalLadder Web - Angular Application

## ✅ Project Successfully Created!

Your Angular 17+ application with Material UI and NgRx is ready for development.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`

## 📦 What's Included

### ✨ Features Implemented

#### Authentication Module
- ✅ Login component with validation
- ✅ Register component with club selection
- ✅ JWT token management
- ✅ Auth guard for protected routes
- ✅ Admin guard for admin-only routes
- ✅ Auto token refresh interceptor

#### Ladder System
- ✅ Ranked player list with Material table
- ✅ Win/loss statistics display
- ✅ Win streak tracking
- ✅ Challenge button with rank validation
- ✅ Top 3, Top 10 badge styling

#### Challenge System
- ✅ Challenge creation
- ✅ Accept/Decline challenges
- ✅ Challenge status tracking (Pending, Accepted, Declined, Completed)
- ✅ Rank-based challenge constraints
- ✅ Challenge history view

#### Match/Score Management
- ✅ Score entry form
- ✅ Match history display
- ✅ Winner tracking
- ✅ Match status management

#### User Profile
- ✅ Profile editing form
- ✅ Photo upload component
- ✅ Personal statistics
- ✅ Bio and skill level fields

#### Shared Components
- ✅ Navbar with navigation
- ✅ Loading spinner
- ✅ Dashboard with quick stats

### 🏗️ Architecture

#### NgRx State Management
- **Actions**: Defined for all features
- **Reducers**: Using Entity adapters for collections
- **Effects**: Ready for API integration
- **Selectors**: Memoized state queries

#### Core Services
- **AuthService**: Login, register, token management
- **LoadingService**: Global loading state
- **ErrorService**: Centralized error handling with Material snackbar

#### Interceptors
- **AuthInterceptor**: Adds JWT to requests, handles token refresh
- **HttpErrorInterceptor**: Global error handling and loading states

#### Guards
- **authGuard**: Protects authenticated routes
- **adminGuard**: Protects admin-only routes

### 📁 Project Structure

```
src/app/
├── core/                          # Core services, guards, interceptors
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   └── admin.guard.ts
│   ├── interceptors/
│   │   ├── auth.interceptor.ts
│   │   └── http-error.interceptor.ts
│   └── services/
│       ├── loading.service.ts
│       └── error.service.ts
├── features/                      # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   └── store/
│   │       ├── auth.actions.ts
│   │       ├── auth.reducer.ts
│   │       ├── auth.effects.ts
│   │       └── auth.selectors.ts
│   ├── ladder/
│   │   ├── components/
│   │   │   └── ladder-list/
│   │   └── store/
│   ├── challenges/
│   │   ├── components/
│   │   │   └── challenge-list/
│   │   └── store/
│   ├── matches/
│   │   ├── components/
│   │   │   ├── match-list/
│   │   │   └── score-entry/
│   │   └── store/
│   ├── users/
│   │   ├── components/
│   │   │   └── user-profile/
│   │   └── store/
│   ├── clubs/
│   │   └── store/
│   └── dashboard/
│       └── dashboard.component.ts
├── shared/
│   └── components/
│       ├── navbar/
│       └── loading-spinner/
├── store/
│   └── index.ts                   # Root store configuration
├── models/                        # TypeScript interfaces
│   ├── user.model.ts
│   ├── club.model.ts
│   ├── ladder.model.ts
│   ├── challenge.model.ts
│   ├── match.model.ts
│   ├── auth.model.ts
│   └── api.model.ts
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

### 🎨 Material Components Used

- mat-toolbar, mat-sidenav (Navigation)
- mat-card (Content containers)
- mat-table (Ladder display)
- mat-form-field, mat-input (Forms)
- mat-button, mat-icon (Actions)
- mat-chip (Status badges)
- mat-dialog, mat-snackbar (Notifications)
- mat-select, mat-menu (Dropdowns)
- mat-progress-spinner (Loading)

## 🔧 Configuration

### Environment Variables

Edit `src/environments/environment.ts`:
```typescript
{
  apiUrl: 'http://localhost:3000/api',  // Your backend API URL
  maxChallengeRankDifference: 3,        // Rank constraint for challenges
  photoUploadMaxSize: 5242880,          // 5MB max
}
```

### Path Aliases (tsconfig.json)

```typescript
"paths": {
  "@core/*": ["src/app/core/*"],
  "@shared/*": ["src/app/shared/*"],
  "@features/*": ["src/app/features/*"],
  "@models/*": ["src/app/models/*"],
  "@store/*": ["src/app/store/*"],
  "@environments/*": ["src/environments/*"]
}
```

## 🌐 Backend API Requirements

Your backend should implement these endpoints:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `POST /api/users/:id/photo` - Upload photo

### Ladder
- `GET /api/ladder/:clubId` - Get ladder for club
- `GET /api/ladder/:clubId/user/:userId` - Get user's ladder entry

### Challenges
- `GET /api/challenges` - Get all challenges
- `POST /api/challenges` - Create challenge
- `PUT /api/challenges/:id/respond` - Accept/decline

### Matches
- `GET /api/matches` - Get matches
- `GET /api/matches/:id` - Get match by ID
- `PUT /api/matches/:id/score` - Update match score

See `ARCHITECTURE.md` for detailed API specifications.

## 📚 Documentation

- **ARCHITECTURE.md** - Detailed technical architecture and technology choices
- **QUICKSTART.md** - Quick reference guide
- **README.md** - This file

## 🚦 Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Implement Backend API
Create a backend service with the required endpoints (Node.js/NestJS recommended)

### 4. Test the Application
- Register a new user
- View the ladder
- Create challenges
- Enter match scores

### 5. Customize
- Update branding and colors
- Add club-specific features
- Implement photo upload backend
- Add real-time features (WebSockets)

## 🎯 Scalability for Other Sports

The application is designed to be sport-agnostic:

### Configuration-Based Approach
```typescript
interface SportConfig {
  name: string;
  scoringSystem: 'points' | 'games' | 'sets';
  rankingAlgorithm: 'elo' | 'ladder';
  challengeRules: {
    maxRankDifference: number;
    expirationDays: number;
  };
}
```

### To Add a New Sport
1. Add sport configuration in environment
2. Update club model to include sport type
3. Adjust scoring logic based on sport
4. Customize challenge rules per sport

## 🔒 Security Notes

- JWT tokens stored in localStorage (consider httpOnly cookies for production)
- Auto token refresh implemented
- Route guards prevent unauthorized access
- Form validation on all inputs
- CORS and CSRF protection needed on backend

## 📈 Performance Features

- Lazy loading routes
- NgRx Entity adapters for normalized state
- Memoized selectors
- Standalone components for better tree-shaking
- Material components with OnPush change detection

## 🛠️ Available Scripts

```bash
npm start          # Start dev server
npm run build      # Build for development
npm run build:prod # Build for production
npm test           # Run unit tests
npm run lint       # Lint code
```

## 📦 Dependencies

- Angular 17.3
- Angular Material 17.3
- NgRx 17.2 (Store, Effects, Entity, DevTools)
- RxJS 7.8
- TypeScript 5.4

## 🎨 Design System

- Material Design color palette
- Responsive breakpoints
- Custom utility classes in styles.scss
- Gradient backgrounds for auth pages

## 📱 Responsive Design

- Mobile-friendly navigation
- Responsive grid layouts
- Touch-friendly buttons
- Adaptive table displays

---

**Built with ❤️ using Angular, Material, and NgRx**

For questions or issues, refer to the documentation files or code comments.

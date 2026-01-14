# RivalLadder Web

A scalable sports ladder challenge platform built with Angular 17+, Material Design, and NgRx.

## Features

- 🎾 **Multi-Sport Support**: Scalable architecture supporting pickleball and other sports
- 🏆 **Ladder System**: Dynamic ranking based on challenge results
- ⚔️ **Challenge System**: Rank-based challenge constraints
- 👥 **User Management**: Profile, photo upload, match history
- 🔐 **Authentication**: JWT-based auth with role-based access (Admin/User)
- 🏢 **Club Management**: Multi-club support with admin controls
- 📊 **Score Tracking**: Match score entry and history
- 🎨 **Material Design**: Modern, responsive UI with Angular Material

## Tech Stack

- **Framework**: Angular 17+ (Standalone Components)
- **State Management**: NgRx (Store, Effects, Entity)
- **UI Library**: Angular Material
- **Language**: TypeScript (Strict Mode)
- **Code Quality**: ESLint with Angular & NgRx plugins

## Project Structure

```
src/
├── app/
│   ├── core/                 # Core services, guards, interceptors
│   ├── features/             # Feature modules
│   │   ├── auth/            # Authentication
│   │   ├── ladder/          # Ladder & rankings
│   │   ├── challenges/      # Challenge system
│   │   ├── matches/         # Match & score management
│   │   ├── users/           # User profiles
│   │   └── clubs/           # Club management
│   ├── shared/              # Shared components, pipes, directives
│   ├── store/               # NgRx root store configuration
│   └── models/              # TypeScript interfaces & models
├── environments/            # Environment configurations
└── assets/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 17+

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

```bash
npm run build        # Development build
npm run build:prod   # Production build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Architecture Patterns

### Smart/Presentational Components
- **Smart Components**: Connect to NgRx store, handle business logic
- **Presentational Components**: Pure components with inputs/outputs

### NgRx Patterns
- **Facades**: Simplified API for components to interact with store
- **Entity Adapters**: Efficient collection management
- **Effects**: Side effects and API calls

### Feature-Based Organization
Each feature module is self-contained with its own:
- Components
- Services
- State (Actions, Reducers, Effects, Selectors)
- Models
- Routing

## Key Concepts

### Ranking System
- Dynamic ladder positions based on match results
- Challenge constraints based on ranking proximity
- Automatic rank updates after match completion

### Multi-Tenancy
- Club-based isolation
- Admin roles per club
- Shared infrastructure for multiple sports

### Scalability
- Generic sport configuration
- Configurable ranking rules
- Modular feature design
- Lazy-loaded routes

## API Integration

The application expects a RESTful API with the following endpoints:

- `/api/auth/*` - Authentication
- `/api/users/*` - User management
- `/api/clubs/*` - Club management
- `/api/ladder/*` - Ladder rankings
- `/api/challenges/*` - Challenge operations
- `/api/matches/*` - Match and score management

Configure API URL in `src/environments/environment.ts`

## Contributing

1. Follow Angular style guide
2. Use strict TypeScript
3. Write unit tests
4. Follow ESLint rules
5. Use conventional commits

## License

Proprietary

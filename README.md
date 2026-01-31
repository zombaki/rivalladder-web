# RivalLadder - Club Ladder Management System

A comprehensive Angular application for managing club ladder/ranking systems with real-time player rankings, challenge management, and match tracking.

## 🏗️ Architecture

This application follows **Domain-Driven Design (DDD)** principles with a clear separation of concerns:

### Core Structure

```
src/app/
├── core/               # Core domain models and business logic
│   ├── models/         # Domain entities (Player, Challenge, Match, etc.)
│   ├── data/           # Mock data providers
│   └── guards/         # Route guards
├── modules/            # Feature modules (lazy-loaded)
│   ├── login/          # Authentication module
│   ├── dashboard/      # Main dashboard with navigation
│   ├── ladder/         # Player rankings/ladder
│   ├── challenges/     # Challenge management
│   └── profile/        # User profile
├── store/              # NgRx state management
│   ├── auth/           # Authentication state
│   ├── players/        # Players state
│   └── challenges/     # Challenges state
└── app.config.ts       # Application configuration
```

## ✨ Features

### 🔐 Authentication
- Login with email/password
- JWT token-based authentication (mocked)
- Protected routes with auth guards
- Persistent sessions via localStorage

### 📊 Player Ladder
- Real-time rankings display
- Rank change indicators
- Win/loss records
- Point tracking
- Win streaks
- Player avatars
- Challenge eligibility (within 3 ranks)

### 🎯 Challenge System
- Create challenges
- Accept/decline challenges
- View active and completed challenges
- Match scheduling
- Score tracking
- Challenge status management

### 👤 Player Profile
- Personal statistics dashboard
- Win rate calculations
- Recent activity feed
- Match history
- Rank progression

## 🛠️ Technical Stack

- **Framework**: Angular 21
- **State Management**: NgRx (Store, Effects, Selectors)
- **UI Components**: Angular Material
- **Styling**: SCSS with Material theming
- **Forms**: Reactive Forms
- **Routing**: Lazy-loaded modules
- **Data**: Mock data at effects level
- **Build Tool**: esbuild via @angular/build

## 📦 State Management

### NgRx Architecture

All state management is handled through NgRx with the following pattern:

1. **Actions**: Define all user actions and side effects
2. **Reducers**: Pure functions that update state
3. **Effects**: Handle async operations and side effects (mock API calls)
4. **Selectors**: Memoized state queries

### Mock Data Strategy

All data is mocked at the **Effects level**, simulating real API calls with delays for realistic user experience.

## 🎨 Design Principles

### Accessibility (a11y)
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Material Design accessibility guidelines

### Scalability
- Modular architecture with lazy loading
- Feature-based organization
- Reusable components
- Type-safe models and interfaces
- Clear separation of concerns

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 11+

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

### Demo Credentials

```
Email: john.doe@example.com
Password: password123
```

Other test accounts available in `src/app/core/data/mock-data.ts`

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## 📱 Application Structure

### Dashboard
- Main navigation shell with responsive sidebar
- User menu with logout
- Route outlets for lazy-loaded modules

### Ladder
- Sortable player rankings table
- Rank badges with top 3 highlighting
- Challenge buttons based on rank proximity
- Current user row highlighting

### Challenges
- Tabbed interface (Active/Completed)
- Challenge cards with accept/decline actions
- Match results display
- Status indicators

### Profile
- User information and statistics
- Performance metrics grid
- Recent activity timeline

## 🔄 Data Flow

1. Component dispatches NgRx Action
2. Reducer updates state synchronously
3. Effect performs async operation (mock API call)
4. Effect dispatches success/failure action
5. Reducer updates state with result
6. Component receives updated state via selector
7. Template updates via async pipe

## 🎯 Business Rules

- Players can challenge others within 3 ranks
- Challenges require acceptance
- Points and wins determine rankings
- Win streaks are tracked and displayed

## 📈 Future Enhancements

- Real backend API integration
- WebSocket for real-time updates
- Match scheduling calendar
- Tournament mode
- Advanced statistics and analytics

---

Built with Angular 21, NgRx, and Angular Material

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

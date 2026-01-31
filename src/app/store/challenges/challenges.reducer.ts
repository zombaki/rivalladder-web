import { createReducer, on } from '@ngrx/store';
import { Challenge } from '../../core/models';
import * as ChallengesActions from './challenges.actions';

export interface ChallengesState {
  challenges: Challenge[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: ChallengesState = {
  challenges: [],
  isLoading: false,
  error: null
};

export const challengesReducer = createReducer(
  initialState,
  on(ChallengesActions.loadChallenges, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ChallengesActions.loadChallengesSuccess, (state, { challenges }) => ({
    ...state,
    challenges,
    isLoading: false,
    error: null
  })),
  on(ChallengesActions.loadChallengesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(ChallengesActions.createChallenge, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ChallengesActions.createChallengeSuccess, (state, { challenge }) => ({
    ...state,
    challenges: [...state.challenges, challenge],
    isLoading: false,
    error: null
  })),
  on(ChallengesActions.createChallengeFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(ChallengesActions.updateChallengeSuccess, (state, { challenge }) => ({
    ...state,
    challenges: state.challenges.map((c) =>
      c.id === challenge.id ? challenge : c
    ),
    isLoading: false,
    error: null
  }))
);

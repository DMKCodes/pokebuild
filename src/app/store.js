import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { pokemonReducer } from '../features/pokemon/pokemonSlice';
import { teamsReducer } from '../features/teams/teamsSlice';
import { movesReducer } from '../features/moves/movesSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    teams: teamsReducer,
    moves: movesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

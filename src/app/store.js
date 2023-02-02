import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { pokemonReducer } from '../features/pokemon/pokemonSlice';
import { teamsReducer } from '../features/teams/teamsSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    teams: teamsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

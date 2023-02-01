import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { pokemonReducer } from '../features/pokemon/pokemonSlice';
import { teamsReducer } from '../features/teams/teamsSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    teams: teamsReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

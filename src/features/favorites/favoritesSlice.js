import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritesArr: [],
    isLoading: true,
    errMsg: ''
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoritesArr.push(action.payload);
        }
    },
    extraReducers: {}
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavorite } = favoritesSlice.actions;

export const selectAllFavorites = (state) => {
    return state.favorites.favoritesArr;
};
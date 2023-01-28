import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teams: [],
    isLoading: true,
    errMsg: ''
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: {}
});

export const teamsReducer = teamsSlice.reducer;

export const selectAllTeams = (state) => {
    return state.teams.teamsArray;
};
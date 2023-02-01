import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teamsArr: [],
    isLoading: true,
    errMsg: ''
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        addTeam: (state, action) => {
            const newTeam = {
                id: state.teamsArr.length + 1,
                ...action.payload
            };
            state.teamsArr.push(newTeam);
        },
        deleteTeam: (state, action) => ({
            ...state,
            teamsArr: state.teamsArr.filter((team) => 
                team.id !== action.payload
            )
        }),
        addPokemonToTeam: (state, action) => {
            return {
                ...state,
                teamsArr: state.teamsArr.map((team) => {
                    return team.id === action.payload.team ? 
                    {...team, pokemonOnTeam: [...team.pokemonOnTeam, action.payload.pokemon]} : 
                    team;
                })
            }
        },
        removePokemonFromTeam: (state, action) => {
            return {
                ...state,
                teamsArr: state.teamsArr.map((team) => {
                    return team.id === action.payload.team ?
                    {...team, pokemonOnTeam: team.pokemonOnTeam.filter((pokemon) => pokemon.id !== action.payload.pokemon.id)} :
                    team;
                })
            }
        }
    },
    extraReducers: {}
});

export const teamsReducer = teamsSlice.reducer;

export const { addTeam, deleteTeam, addPokemonToTeam } = teamsSlice.actions;

export const selectAllTeams = (state) => {
    return state.teams.teamsArr;
};
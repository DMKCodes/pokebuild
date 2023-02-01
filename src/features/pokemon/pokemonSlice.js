import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { capitalize } from '../../utils/capitalize';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then((allPokemon) => {
                const pokemon = allPokemon.results.map((pokemon) => {
                    const data = new Promise(async (resolve, reject) => {
                        const pokeData = await fetch(pokemon.url)
                            .then(pokeData => pokeData.json())
                        
                        const types = pokeData.types.map((type) => capitalize(type.type.name));

                        resolve({
                            id: pokeData.id,
                            name: capitalize(pokemon.name),
                            types: types,
                            image: pokeData.sprites.other.dream_world.front_default
                        });
                    });

                    return data;
                });

                const pokemonList = Promise.all(pokemon);
                return (pokemonList);
            })

        return response;
    }
);

const initialState = {
    pokemonArr: [],
    allPokemonArr: [],
    isLoading: true,
    errMsg: ''
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        filterPokemonByType: (state, action) => ({
            ...state,
            pokemonArr: state.pokemonArr.filter((pokemon) => pokemon.types.includes(action.payload))
        }),
        filterPokemonByName: (state, action) => ({
            ...state,
            pokemonArr: state.pokemonArr.filter((pokemon) => pokemon.name.includes(action.payload.toLowerCase()))
        }),
        resetPokemon: (state) => ({
            ...state,
            pokemonArr: state.allPokemonArr
        })
    },
    extraReducers: {
        [fetchPokemon.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPokemon.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.pokemonArr = action.payload;
            state.allPokemonArr = action.payload;
        },
        [fetchPokemon.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const pokemonReducer = pokemonSlice.reducer;

export const { 
    filterPokemonByType, 
    filterPokemonByName, 
    resetPokemon 
} = pokemonSlice.actions;

export const selectAllPokemon = (state) => {
    return state.pokemon.pokemonArr;
};

export const selectPokemonById = (id) => (state) => {
    return state.pokemon.pokemonArr.find(
        (pokemon) => pokemon.id === parseInt(id)
    );
};

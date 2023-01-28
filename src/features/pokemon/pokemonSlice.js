import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

                        resolve({
                            id: pokeData.id,
                            name: pokemon.name,
                            types: pokeData.types,
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
    pokemon: [],
    isLoading: true,
    errMsg: ''
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPokemon.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPokemon.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.pokemon = action.payload;
        },
        [fetchPokemon.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const pokemonReducer = pokemonSlice.reducer;

export const selectAllPokemon = (state) => {
    return state.pokemon.pokemon;
};

export const selectPokemonById = (id) => (state) => {
    return state.pokemon.pokemonArray.find(
        (pokemon) => pokemon.id === parseInt(id)
    );
};

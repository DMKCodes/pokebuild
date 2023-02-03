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
                            image: pokeData.sprites.other.dream_world.front_default,
                            favorite: false,
                            height: pokeData.height,
                            weight: pokeData.weight,
                            hp: pokeData.stats[0].base_stat,
                            attack: pokeData.stats[1].base_stat,
                            defense: pokeData.stats[2].base_stat,
                            specialAttack: pokeData.stats[3].base_stat,
                            specialDefense: pokeData.stats[4].base_stat,
                            speed: pokeData.stats[5].base_stat,
                            moves: []
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
        toggleFavorite: (state, action) => {
            return {
                ...state,
                pokemonArr: state.pokemonArr.map((pokemon) => {
                    return pokemon.id === action.payload ?
                    {...pokemon, favorite: !pokemon.favorite} :
                    pokemon;
                }),
                allPokemonArr: state.allPokemonArr.map((pokemon) => {
                    return pokemon.id === action.payload ?
                    {...pokemon, favorite: !pokemon.favorite} :
                    pokemon;
                })
            }
        },
        filterPokemonByType: (state, action) => ({
            ...state,
            pokemonArr: state.pokemonArr.filter(
                (pokemon) => pokemon.types.includes(action.payload))
        }),
        filterPokemonByName: (state, action) => ({
            ...state,
            pokemonArr: state.pokemonArr.filter((pokemon) => 
                pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
            )
        }),
        filterPokemonByFavorites: (state, action) => ({
            ...state,
            pokemonArr: state.pokemonArr.filter((pokemon) => 
                pokemon.favorite === true
            )
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
    toggleFavorite,
    filterPokemonByType, 
    filterPokemonByName,
    filterPokemonByFavorites,
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

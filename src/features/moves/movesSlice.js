import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMoves = createAsyncThunk(
    'moves/fetchMoves',
    async () => {
        const response = await fetch('https://pokeapi.co/api/v2/move?limit=499')
            .then(response => response.json())
            .then((allMoves) => {
                const moves = allMoves.results.map((move) => {
                    const data = new Promise(async (resolve, reject) => {
                        const moveData = await fetch(move.url)
                            .then(moveData => moveData.json())

                    resolve({
                        id: moveData.id,
                        name: moveData.name,
                        accuracy: moveData.accuracy,
                        effect_chance: moveData.effect_chance,
                        pp: moveData.pp,
                        power: moveData.power,
                        damageClass: moveData.damage_class.name,
                        type: moveData.type.name,
                        flavorText: moveData.flavor_text_entries[0].flavor_text
                    });
                });

                return data;
            });
        
            const movesList = Promise.all(moves);
            return movesList;    
        })

        return response;
    }
);

const initialState = {
    movesArr: [],
    isLoading: true,
    errMsg: ''
};

export const movesSlice = createSlice({
    name: 'moves',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMoves.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMoves.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.movesArr = action.payload;
        },
        [fetchMoves.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const movesReducer = movesSlice.reducer;

export const selectAllMoves = (state) => {
    return state.moves.movesArr;
};

export const selectMoveById = (id) => (state) => {
    return state.moves.movesArr.find(
        (move) => move.id === parseInt(id)
    );
};
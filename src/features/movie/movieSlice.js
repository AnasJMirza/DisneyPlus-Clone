import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recomended: null,
    newDisney: null,
    orignals: null,
    trending: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recomended = action.payload.recomended;
            state.newDisney = action.payload.newDisney;
            state.orignals = action.payload.orignals;
            state.trending = action.payload.trending;
        }
    }

})

export const { setMovies } = movieSlice.actions;

export const selectRecomended = (state) => state.recomended
export const selectNewDisney = (state) => state.newDisney
export const selectOrignals = (state) => state.orignals
export const selectTrending = (state) => state.trending

export default movieSlice.reducer;
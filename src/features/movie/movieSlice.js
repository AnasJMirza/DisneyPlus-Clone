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
            console.log(action.payload.recomend, "set");
            state.recomended = action.payload.recomend;
            state.newDisney = action.payload.new;
            state.orignals = action.payload.orignal;
            state.trending = action.payload.trend;
        }
    }

})

export const { setMovies } = movieSlice.actions;

export const selectRecomended = (state) => state.movie.recomended
export const selectNewDisney = (state) => state.movie.newDisney
export const selectOrignals = (state) => state.movie.orignals
export const selectTrending = (state) => state.movie.trending

export default movieSlice.reducer;
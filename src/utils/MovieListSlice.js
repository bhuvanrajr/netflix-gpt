import { createSlice } from "@reduxjs/toolkit";

const MovieListSlice = createSlice({
    name: "MovieListSlice",
    initialState: {
        NowPlayingMovies : null,
        Trailer : null
    },
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addTrailerKey : (state, action) => {
            state.Trailer  = action.payload
        }
    }
});

export const {addNowPlayingMovies, addTrailerKey} = MovieListSlice.actions
export default MovieListSlice.reducer;
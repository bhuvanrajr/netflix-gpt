import { createSlice } from "@reduxjs/toolkit";

const MovieListSlice = createSlice({
    name: "MovieListSlice",
    initialState: {
        NowPlayingMovies : null
    },
    reducers:{
        addNowPlayingMovies : (state, action) =>{
            state.NowPlayingMovies = action.payload;
            console.log(state.NowPlayingMovies);
        }
    }
});

export const {addNowPlayingMovies} = MovieListSlice.actions
export default MovieListSlice.reducer;
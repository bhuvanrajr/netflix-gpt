import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from "./UserDataSlice";
import MovieListReducer from "./MovieListSlice";

const AppStore = configureStore({
    reducer : {
        userData : UserDataReducer,
        movieList : MovieListReducer
    }
});

export default AppStore;

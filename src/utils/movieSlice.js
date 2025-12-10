import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        movieTrailer:null ,
        
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies =action.payload;
        },
        addMovieTrailer:(state, action) => {
            state.movieTrailer =action.payload;
        },
    
        
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies}= movieSlice.actions;

export default movieSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import { Movie, movies } from '../../movies'

type StateType = {
    leftMovieList: Movie[],
    rightMovieList: Movie[],
    search: string,
};

const initialState: StateType = {
    leftMovieList: movies,
    rightMovieList: [],
    search: ""
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.rightMovieList.push(action.payload.movie);
            const newLeftList = state.leftMovieList.filter((item) => item.id !== action.payload.movie.id);
            state.leftMovieList = newLeftList;
        },
        removeMovie: (state, action) => {
            state.leftMovieList.push(action.payload.movie);
            const newRightList = state.rightMovieList.filter((item) => item.id !== action.payload.movie.id);
            state.rightMovieList = newRightList;
        },
        searchMovie: (state, action) => {
            state.search = action.payload.search;
        },
    }
})

export const { addMovie, removeMovie, searchMovie } = movieSlice.actions;
import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from '../reducer/reducers'

const store = configureStore({
    reducer: {
        movies: movieSlice.reducer,
    }
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

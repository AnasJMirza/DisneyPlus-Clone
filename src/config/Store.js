import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/auth/userSlice'
import movieSlice from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});


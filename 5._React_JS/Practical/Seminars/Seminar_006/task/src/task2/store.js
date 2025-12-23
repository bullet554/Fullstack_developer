import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from './slices/favoritesSlice';

const store = configureStore({
    reducer: {
        favorites: favoritesSlice
    }
});

export default store;
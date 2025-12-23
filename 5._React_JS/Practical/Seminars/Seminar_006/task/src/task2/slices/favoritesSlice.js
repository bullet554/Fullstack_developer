import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addProduct, deleteProduct } = favoritesSlice.actions
export default favoritesSlice.reducer;
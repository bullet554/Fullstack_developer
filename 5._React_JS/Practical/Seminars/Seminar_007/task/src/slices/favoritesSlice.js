import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const newId = uuidv4();
            state.push({
                id: newId,
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price
            });
        },
        deleteProduct: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addProduct, deleteProduct } = favoritesSlice.actions
export default favoritesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const productSlices = createSlice({
    name: 'productsSlice',
    initialState: {
        products: [],
        lastId: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const newId = state.lastId + 1;
            state.products.push({
                id: newId,
                ...action.payload
            });
            state.lastId = newId;
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(todo => todo.id !== action.payload.id);
        },
        updateProduct: (state, action) => {
            state.products = state.products.map(product =>
                product.id === action.payload.id ? action.payload : product
            );
        },
        availableProduct: (state, action) => {
            state.products = state.products.map(product =>
                product.id === action.payload.id ? {
                    ...product,
                    available: !product.available
                } : product
            );
        }
    }
});

export const {
    addProduct,
    deleteProduct,
    updateProduct,
    availableProduct
} = productSlices.actions;
export default productSlices.reducer;
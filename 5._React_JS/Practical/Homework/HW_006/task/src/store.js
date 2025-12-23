import { configureStore } from "@reduxjs/toolkit";
import productSlices from './slices/productSlices';

const store = configureStore({
    reducer: {
        products: productSlices
    }
});

export default store;
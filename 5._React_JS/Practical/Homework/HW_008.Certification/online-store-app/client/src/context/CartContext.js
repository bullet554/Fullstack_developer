import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cart: [],
    total: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                total: state.total - action.payload.price
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
    products: [],
    cart: [],
    selectedSize: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'SELECT_SIZE':
            return {
                ...state,
                selectedSize: action.payload,
            };
        default:
            return state;
    }
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setProducts = (products) => {
        dispatch({ type: 'SET_PRODUCTS', payload: products });
    };

    const selectSize = (size) => {
        dispatch({ type: 'SELECT_SIZE', payload: size });
    };

    return (
        <StoreContext.Provider value={{
            ...state,
            setProducts,
            selectSize,
        }}>
            {children}
        </StoreContext.Provider>
    );
};

// Дополнительные утилиты для магазина
export const useStore = () => useContext(StoreContext);
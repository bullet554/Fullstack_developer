import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import favoritesSlice from './slices/favoritesSlice';
import usersReducer from './slices/usersSlice';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
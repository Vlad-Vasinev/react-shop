import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { UserReducer } from './userReducer';
import { ProductReducer } from './productReducer';
import { BinReducer } from './binReducer';

const persistConfig = {
    key: 'root',
    storage,
}

const mixReducer = combineReducers({
    user: UserReducer,
    product: ProductReducer,
    bin: BinReducer,
});

const persistedReducer = persistReducer(persistConfig, mixReducer);

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(persistedReducer, composedEnhancer);

export const persistor = persistStore(store);

// export const store = createStore(mixReducer, composedEnhancer);
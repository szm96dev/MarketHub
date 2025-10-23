import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import favoritesReducer from './reducers/favoritesReducer';
import productsReducer from './reducers/productsReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'auth', 'favorites'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);



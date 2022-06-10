import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../Reducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage: storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);


const loggerMiddleware = createLogger();

const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store



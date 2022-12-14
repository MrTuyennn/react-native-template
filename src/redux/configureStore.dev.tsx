import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootSaga, {rootReducer} from './duck/index';
import sagaMiddleware from './middlewares/saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const logger = (store: any) => (next: any) => (action: any) => {
  let result = next(action);
  return result;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: ['property'],
      ignoredPaths: ['reducer.property']
    },
  }),
  sagaMiddleware,
  logger,
];
export default function configurestore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    // devTools: process.env.NODE_ENV !== 'production',
  });
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}

const {store} = configurestore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

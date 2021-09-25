import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import cardsReducer from './userCards/cards-reducer';
import { authReducer } from './auth';
import { callCardsReducer } from './cards';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'sid', 'refreshToken'],
};

const cardsPersistConfig = {
  key: 'cards',
  storage,

  blacklist: ['loading', 'error'],
};

const allCardsPersistConfig = {
  key: 'allCards',
  storage,
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cards: persistReducer(cardsPersistConfig, cardsReducer),
    allCards: persistReducer(allCardsPersistConfig, callCardsReducer),
  },
  middleware,
  devTools: true,
});

const persistor = persistStore(store);

export default { store, persistor };

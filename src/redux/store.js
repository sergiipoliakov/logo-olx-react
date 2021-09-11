import { createStore } from 'redux';
const reducer = (state = {}, action) => state;

const store = createStore(reducer);

export default store;

//

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { postersReducer } from './poster';

// const myMiddleware = store => next => action => {
//   next(action);
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   myMiddleware,
// ];

// const posterPersistConfig = {
//   key: 'posters',
//   storage,

//   // blacklist: ['user', 'error'],
// };
// const store = configureStore({
//   reducer: {
//     poster: persistReducer(posterPersistConfig, postersReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default { store, persistor };

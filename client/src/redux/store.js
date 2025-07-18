// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './user/userSlice';

// export const store = configureStore({
//     reducer: { user: userReducer },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//   });

// export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage
// import userReducer from './user/userSlice.js';

// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'root',
//   storage,
//   version:1,
// };

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Required for redux-persist
//     }),
// });

// export const persistor = persistStore(store);



import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
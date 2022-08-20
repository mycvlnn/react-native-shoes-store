import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types'
import logger from 'redux-logger'

import rootReducer, { reducers } from './rootReducer'

type persistConfigType = {
  key: string
  version: number
  storage: AsyncStorageStatic
  whitelist: (keyof typeof reducers)[]
}

const persistConfig: persistConfigType = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['appUser', 'cart'], // Danh sách những slice được persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'

import { reducer as assetsReducer } from 'store/slices/assetsSlice'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['assets'],
}

const reducers = combineReducers({
  assets: assetsReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

export default store

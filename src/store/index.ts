import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'

import assetsReducer from 'store/slices/assetsSlice'

const reducers = combineReducers({
  assets: assetsReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  devTools: false,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }),
})

export let persistor = persistStore(store)

export default store

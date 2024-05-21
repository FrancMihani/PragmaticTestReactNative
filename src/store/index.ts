import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import assetsReducer from 'store/slices/assetsSlice'

const reducers = combineReducers({
  assets: assetsReducer,
})

const reducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['assets'],
  },
  reducers,
)

const store = configureStore({
  reducer,
  devTools: false,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
})

export default store

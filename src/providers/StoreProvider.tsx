import React, { PropsWithChildren } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from 'store'

let persistor = persistStore(store)
const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)

export default StoreProvider

import React from 'react'
import Navigation from 'navigation'
import QueryClientProvider from 'providers/QueryClientProvider'
import StoreProvider from 'providers/StoreProvider'

const App = () => (
  <QueryClientProvider>
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  </QueryClientProvider>
)

export default App

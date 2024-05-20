import React from 'react'
import Navigation from 'navigation'
import QueryClientProvider from 'providers/QueryClientProvider'

const App = () => (
  <QueryClientProvider>
    <Navigation />
  </QueryClientProvider>
)

export default App

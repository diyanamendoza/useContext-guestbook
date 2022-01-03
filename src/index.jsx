import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { EntryProvider } from './context/EntryContext'
import { UserProvider } from './context/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <EntryProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
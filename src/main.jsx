import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link rel="stylesheet" href="App.css" />
    <link rel="stylesheet" href="Menu.css" />
    <link rel="stylesheet" href="Questions.css" />
    <App />
  </React.StrictMode>,
)

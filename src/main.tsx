import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Build marker to ensure the latest compiled bundle is published.
document.documentElement.dataset.portfolioBuild = '2026-11-12'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

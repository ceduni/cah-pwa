import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.querySelector('#toto');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

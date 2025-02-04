import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './firebase/firebase'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import './index.css'
import App from './App.tsx'
import './server'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

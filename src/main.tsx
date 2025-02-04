import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './firebase/firebase'
import {AuthProvider} from './contexts/AuthContext'
import './index.css'
import App from './App.tsx'
import './server'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </StrictMode>,
)

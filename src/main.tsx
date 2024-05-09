import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from '@/routers/Router'
import Providers from './providers/Providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
)

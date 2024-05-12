import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from '@/routers/Router'
import Providers from './providers/Providers'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Toasts from './components/Toasts/Toasts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Providers>
        <Router />
        <Toasts />
      </Providers>
    </QueryClientProvider>
  </React.StrictMode>
)

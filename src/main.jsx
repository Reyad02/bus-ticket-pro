import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/route.jsx';
import { HelmetProvider } from 'react-helmet-async';
import BusProvider from './provider/BusProvider.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <BusProvider>
            <RouterProvider router={router} />
          </BusProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/route.jsx';
import { HelmetProvider } from 'react-helmet-async';
import BusProvider from './provider/BusProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BusProvider>
        <RouterProvider router={router} />
      </BusProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

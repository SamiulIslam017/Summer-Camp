import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import AuthProvider from './Provider/AuthProvider';
import router from './Routers/Router';
import {
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

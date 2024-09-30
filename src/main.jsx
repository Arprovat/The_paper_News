import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Router/Route.jsx'
import AuthContex from './Authentication/AuthContext/AuthContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

 <AuthContex>
     <RouterProvider router={Route}></RouterProvider>

 </AuthContex>

  </StrictMode>,
)

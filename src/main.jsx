import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.jsx";
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>,
)

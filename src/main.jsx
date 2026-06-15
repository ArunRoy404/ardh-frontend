import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router/dom'
import router from './router/router.jsx'
import { ThemeProvider } from '@/context/ThemeContext'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
)

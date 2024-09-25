import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Garage from './Car'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Garage />
  </StrictMode>,
)

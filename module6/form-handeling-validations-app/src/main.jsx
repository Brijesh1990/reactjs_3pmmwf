import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormApp from './components/FormApp'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormApp />
  </StrictMode>,
)

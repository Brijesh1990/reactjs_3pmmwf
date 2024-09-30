import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Employee from './Employee'
import App from './EmployeeData'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Employee name="Brijesh" /> */}
    <App />
  </StrictMode>,
)

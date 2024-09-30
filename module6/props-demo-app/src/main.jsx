import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './NameApp'
// import Employee from './Employee'
import Employee from './EmployeeApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App name="Brijesh kumar pandey" /> */}
    {/* <Employee name="Rajesh verma" /> */}
    <Employee compname="Tops technology pvt ltd" />
  </StrictMode>,
)

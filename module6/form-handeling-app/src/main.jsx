import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import AddEmployee from './components/AddEmployee'
import AddEmployees from './components/AddEmployees'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AddEmployee /> */}
    <AddEmployees />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AddEmployee from './components/AddEmployee.jsx'
import AddForm from './components/AddForm'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <AddEmployee/> */}
  <AddForm />
  </StrictMode>,
)

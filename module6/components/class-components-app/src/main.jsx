import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TeacherApp from './components/NameApp'
import './index.css'
// import Name from './components/Name'
// import Employee from './components/EmployeeList'
// import Garage from './components/Garage'
import App from './components/HookApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TeacherApp /> */}
    {/* <Name /> */}
    {/* <Employee /> */}
    {/* <Garage /> */}
    <App />
  </StrictMode>,
)
